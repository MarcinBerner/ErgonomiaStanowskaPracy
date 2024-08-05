import { Component, OnInit } from '@angular/core';
import { WorkerService } from '../core/services/worker.service';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrl: './score.component.css',
})
export class ScoreComponent {
  workers: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 3;
  selectedWorker: any;
  constructor(private workerService: WorkerService) {}
  async ngOnInit(): Promise<void> {
    try {
      this.workers = await this.workerService.fetchWorkers();
      this.workers.sort((a,b)=>{
        const nameA = a.surname.toUpperCase();
        const nameB = b.surname.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        return 0;
      });
    } catch (error) {
      console.error('Error fetching workers:', error);
    }

  }
  get paginatedWorkers(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.workers.slice(startIndex, endIndex);
  }

  changePage(page: number) {
    this.currentPage = page;
  }

  totalPages(): number {
    return Math.ceil(this.workers.length / this.itemsPerPage);
  }
   // Method to export data to Excel
   exportToExcel(): void {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.workers);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Workers');

    // Generate Excel file
    const wbout: ArrayBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });

    // Save file using file-saver
    saveAs(new Blob([wbout], { type: 'application/octet-stream' }), 'workers.xlsx');
  }

  // Method to select worker for editing
  editWorker(worker: any) {
    this.selectedWorker = { ...worker }; // Make a copy of the worker for editing
  }

  // Method to update the worker's data
  updateWorker() {
    if (this.selectedWorker) {
      const index = this.workers.findIndex(worker => worker.id === this.selectedWorker.id);
      if (index !== -1) {
        this.workers[index] = this.selectedWorker;
      }
      this.selectedWorker = null; // Clear the selection
    }
  }
}




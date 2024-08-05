import { Component, OnInit } from '@angular/core';
import { WorkerService } from '../core/services/worker.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrl: './score.component.css',
})
export class ScoreComponent {
  workers: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 3;
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
}




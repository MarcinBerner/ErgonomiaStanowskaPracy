import { Component, OnInit } from '@angular/core';
import { WorkerService } from '../core/services/worker.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrl: './score.component.css',
})
export class ScoreComponent {
  constructor(private workerService: WorkerService) {}
  async ngOnInit() {
    const workers = await this.workerService.fetchWorkers();
    console.log(workers);
  }

}

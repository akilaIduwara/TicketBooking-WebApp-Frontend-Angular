import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  maxTicketCapacity: number = 0; // Default value
  totalNoOfTickets: number = 0; // Default value
  ticketReleaseRate: number = 0; // Default value
  customerRetrievalRate: number = 0; // Default value
  simulationStatus: string = '';
  title: string = 'Simulation';
  // constructor(@Inject(HttpClient) private http: HttpClient) {}
  constructor(private http: HttpClient) {}

  // // Start the simulation
  // startSimulation() {
  //   const params = new URLSearchParams({
  //     maxTicketCapacity: this.maxTicketCapacity.toString(),
  //     totalNoOfTickets: this.totalNoOfTickets.toString(),
  //     ticketReleaseRate: this.ticketReleaseRate.toString(),
  //     customerRetrievalRate: this.customerRetrievalRate.toString(),
  //   });
  
  //   this.http.put(`http://localhost:8080/api/simulation/start?${params}`, {}).subscribe(
  //     (response: any) => {
  //       this.simulationStatus = response;
  //     },
  //     (error) => {
  //       this.simulationStatus = 'Error starting simulation.';
  //     }
  //   );
  // }
  

  // // Stop the simulation
  // stopSimulation() {
  //   this.http.post('http://localhost:8080/api/simulation/stop', {}).subscribe(
  //     (response: any) => {
  //       this.simulationStatus = response; // Update status based on response
  //       console.log('Simulation stopped:', response);
  //     },
  //     (error) => {
  //       this.simulationStatus = 'Error stopping simulation.';
  //       console.error('Error stopping simulation:', error);
  //     }
  //   );
  // }

  // Start the simulation
  startSimulation() {
    const payload = {
      maxTicketCapacity: this.maxTicketCapacity,
      totalNoOfTickets: this.totalNoOfTickets,
      ticketReleaseRate: this.ticketReleaseRate,
      customerRetrievalRate: this.customerRetrievalRate,
    };

    this.http.put('http://localhost:8080/api/simulation/start', payload).subscribe(
      (response: any) => {
        this.simulationStatus = response;
        console.log('Simulation started:', response);
      },
      (error) => {
        this.simulationStatus = 'Starting simulation.';
        console.error('Starting simulation:', error);
      }
    );
  }

  // Stop the simulation
  stopSimulation() {
    this.http.post('http://localhost:8080/api/simulation/stop', {}).subscribe(
      (response: any) => {
        this.simulationStatus = response; // Update status based on response
        console.log('Simulation stopped:', response);
      },
      (error) => {
        this.simulationStatus = 'Stopping simulation.';
        console.error('Stopping simulation:', error);
      }
    );
  }
}


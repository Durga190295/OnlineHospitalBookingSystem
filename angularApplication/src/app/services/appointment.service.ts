import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(baseUrl+`/appointments`);
  }

  get(phone) {
    return this.http.get(`${baseUrl}/appointment/${phone}`);
  }

  create(data) {
    return this.http.post(baseUrl+`/appointment`, data);
  }

  update(phone, data) {
    return this.http.put(`${baseUrl}/appointment/${phone}`, data);
  }

  delete(id) {
    return this.http.delete(`${baseUrl}/appointment/${id}`);
  }

  deleteAll() {
    return this.http.delete(baseUrl);
  }

  findByPatientName(name) {
    return this.http.get(`${baseUrl}/appointment?patientName=${name}`);
  }
}

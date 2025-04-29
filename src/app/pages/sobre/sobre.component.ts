import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GoogleMap, MapAdvancedMarker } from '@angular/google-maps';
@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [RouterLink, GoogleMap, MapAdvancedMarker],
  templateUrl: './sobre.component.html',
})
export class SobreComponent implements OnInit {
  // Centraliza o mapa no Brasil
  center: google.maps.LatLngLiteral = { lat: -22.235, lng: -51.9253 };
  zoom = 4;

  // Array de marcadores com as coordenadas e opções (nome do estado)
  markers: {
    position: google.maps.LatLngLiteral;
    options: google.maps.marker.AdvancedMarkerElementOptions;
  }[] = [];
  selectedState: string = 'CE';

  ngOnInit() {
    // Definindo as coordenadas (aproximadas) dos respectivos estados.
    // Você pode ajustar as coordenadas conforme necessário.
    this.markers = [
      { position: { lat: -3.71722, lng: -38.5433 }, options: { title: 'CE' } }, // Fortaleza, Ceará
      { position: { lat: -8.04756, lng: -34.877 }, options: { title: 'PE' } }, // Recife, Pernambuco
      { position: { lat: -2.53874, lng: -44.2822 }, options: { title: 'MA' } }, // São Luís, Maranhão
      { position: { lat: -19.9167, lng: -43.9345 }, options: { title: 'MG' } }, // Belo Horizonte, Minas Gerais
      { position: { lat: -7.11509, lng: -34.861 }, options: { title: 'PB' } }, // João Pessoa, Paraíba
      { position: { lat: -22.9068, lng: -43.1729 }, options: { title: 'RJ' } }, // Rio de Janeiro, Rio de Janeiro
      { position: { lat: -5.79448, lng: -35.211 }, options: { title: 'RN' } }, // Natal, Rio Grande do Norte
      { position: { lat: -27.5954, lng: -48.548 }, options: { title: 'SC' } }, // Florianópolis, Santa Catarina
      { position: { lat: -10.9472, lng: -37.0731 }, options: { title: 'SE' } }, // Aracaju, Sergipe
      { position: { lat: -23.5505, lng: -46.6333 }, options: { title: 'SP' } }, // São Paulo, São Paulo
    ];
  }

  onStateChange(uf: string) {
    this.selectedState = uf;
    this.updateMapCenter();
  }

  updateMapCenter() {
    const selectedMarker = this.markers.find(
      (marker) => marker.options.title === this.selectedState
    );
    if (selectedMarker) {
      this.center = selectedMarker.position;
      this.zoom = 6;
    }
  }
}

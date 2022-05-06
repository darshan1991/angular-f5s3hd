import { Component } from "@angular/core";
import * as L from "leaflet";
import { latLng, tileLayer } from "leaflet";
import "@geoman-io/leaflet-geoman-free";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public options = {
    layers: [
      tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors"
      })
    ],
    zoom: 7,
    center: latLng([46.879966, -121.726909])
  };

  constructor() {
    L.Icon.Default.imagePath = "/assets/";
  }

  public onMapReady(map: L.Map): void {
    // @ts-ignore
    map.pm.addControls({
      position: "topleft"
    });
  }
}

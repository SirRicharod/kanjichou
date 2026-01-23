import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Home } from "./pages/home/home";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [Header, Home, Footer, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('kanjichou');
}

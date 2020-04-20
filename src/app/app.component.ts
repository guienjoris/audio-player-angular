import { Component, OnInit} from '@angular/core';
import { DomSanitizer, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'Audio Player';
  playlistBrut: any[]=[];
  files : any[] = [];
  playlistFinal: any[]= [];
  playlistDisplay: any [] = []
  srcMusic: string;
  musicPlaying: string;

  constructor( private sanitizer : DomSanitizer){}
  ngOnInit(){
  }
  
  select(event:any){
    this.playlistBrut.push(Array.prototype.slice.call(event.target.files));
    // if(this.playlistBrut.length >1){
    //   this.playlistFinal = this.playlistBrut[0].concat(this.playlistBrut[1])
    // }else{
    //   this.playlistFinal= this.playlistBrut[0];
    // }
    console.log(this.playlistBrut)
  }
  
  play(){
    let i:number;

    if(this.playlistBrut.length >1){
        this.playlistFinal = this.playlistBrut[0].concat(this.playlistBrut[1])
      }else{
        this.playlistFinal= this.playlistBrut[0];
      }
    for(i=0;i< this.playlistFinal.length;i++){
      this.files.push(URL.createObjectURL(this.playlistFinal[i]));
      
    }
    this.playlistDisplay = this.playlistFinal;
    console.log(this.playlistFinal)
  }
  selectMusik(index:any){
    this.musicPlaying= this.playlistDisplay[index].name;
    this.srcMusic = this.files[index];
    console.log(this.srcMusic,this.musicPlaying)
  }
}


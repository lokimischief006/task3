import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  departments=[
    {
      id:1,
      Title:"Aerospace & Defence",
      Image:"../../../assets/aerospace.jpg",
      description:"Pushing boundaries & defending horizons with cutting-edge technologies",
   },
   {
    id:2,
    Title:"Banking & Financial Service (BFS)",
    Image:"../../../assets/banking.jpg",
    description:"Accelerating the cashless economy efficiently by adopting global standards & local priorities",
 },
 {
  id:3,
  Title:"Healthcare",
  Image:"../../../assets/healthcare.jpg",
  description:"Promoting digital innovation & excellence in the healthcare industry",
},
{
  id:4,
  Title:"Insurance",
  Image:"../../../assets/insurence.jpg",
  description:"Unlocking the potential of insurance through technology",
},
{
  id:5,
  Title:"Locomotive",
  Image:"../../../assets/locomotive.jpg",
  description:"Elevating Locomotive Experiences through Innovative Technologies",
},
{
  id:6,
  Title:"Industrial",
  Image:"../../../assets/industrial.png",
  description:"Where Power Meets Production: Redefining Manufacturing & Energy",
},
{
  id:7,
  Title:"Mobility",
  Image:"../../../assets/mobility.jpg",
  description:"We are Revolutionizing the world of Mobility",
},
  ]

  

}

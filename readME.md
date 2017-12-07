### Installing the prerequisites

Node.js and NPM : Download Node.js from https://nodejs.org/en/download and install on your system. NPM comes bundled with Node.js

```
git clone <Repo_URL>
cd into that repo

once you are in that folder run commands below

```

### Running Server


```
npm install
npm start

```


### Adding a new feature

1. In the app/ folder create a new folder with a name that matches the feature you want to add app/example.
2. In that folder you create add 3 files example-component.html, example-component.scss and example-component.ts
3.
in the example-component.ts file add this.
```
import { Component } from '@angular/core';


  @Component({
      selector: 'ms-example',
      templateUrl: './example-component.html', // change this to the name of your html file
      styleUrls: ['./example-component.scss'] // change this to the name of your scss file.
  })
  export class ExampleComponent { // name this to match your component you want to implement.

}
```
3. To import your folder go to app/app.module.ts and go to line 56 and add your folder like the examples there.
4. Go to app/app-routing.module.ts on or after line 13
```
  import { ExampleComponent } from './example/example-component';
```
Then on or after line 17 and add
```
  { path: 'example', component: ExampleComponent }, // the path is the URL route that we will target from our nav. The component is out component we are using for that path.
```
5. Add it to our nav list so we can navigate to that path in the URL.

```
<!-- Example -->
  <div>
    <mat-list-item [routerLink]="['/example']" data-toggle="collapse" data-parent=".sidenav-padding" data-target="#exampleCollapse"> // This is how to point it to the right URL update with the path names you set in the app/app-routing.module.ts file [routerLink]="['/example']"
      Example
    </mat-list-item>
    <div id="exampleCollapse" class="collapse">
      <mat-list-item class="navLinksHover">
          <a class="navLinks">
            - Example sub menu
          </a>
      </mat-list-item>
    </div>
  </div>
<!-- End Example -->
```


//

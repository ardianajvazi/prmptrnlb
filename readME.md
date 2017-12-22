### Installing the prerequisites

Node.js and NPM : Download Node.js from https://nodejs.org/en/download and install on your system. NPM comes bundled with Node.js

```
git clone https://github.com/uxcourt/prmptrnlb.git // into a folder of your choice
cd prmptrnlb from command line

Once you are in that folder you will be on the master branch (if you need to switch to a different branch run git checkout <branch name>) then run the commands below

```

### Running Server

In your Terminal run these commands

```
npm install   // this will install all the dependencies we use in our app
npm start   // this will run it on localhost:3001 if you want to change port see package.json file.

```


### Adding a new feature

1. In the src/app/ folder create a new folder with a name that matches the feature you want to add app/example.
2. In that folder you create add 3 files example-component.html, example-component.scss and example-component.ts
3.
in the example-component.ts file add this.
```
import { Component } from '@angular/core';


  @Component({
      selector: 'example',
      templateUrl: './example-component.html', // change this to the name of your html file
      styleUrls: ['./example-component.scss'] // change this to the name of your scss file.
  })
  export class ExampleComponent { // name this to match your component you want to implement.

}
```
4. Import your folder into src/app/app.module.ts and see the examples there.
```
  import { ExampleComponent } from './example/example-component';
```
5. Go to src/app/app-routing.module.ts and import your component so you can add a route.
```
  import { ExampleComponent } from './example/example-component';
```
In the const appRoutes: Routes = [ ] array you can add your path. (see example below. )
```
const appRoutes: Routes = [
  { path: 'example', component: ExampleComponent }
  // the path is the URL route that we will target from our nav. The component is out component we are using for that path.
}
```
6. Add the path to the navigation list which is in the file src/app/app.component.ts

```
<!-- Example -->
  <div>
    <mat-list-item [routerLink]="['/example']" data-toggle="collapse" data-parent=".sidenav-padding" data-target="#exampleCollapse"> // This is how to point it to the right URL update with the path names you set in the src/app/app-routing.module.ts file [routerLink]="['/example']"
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

Images are located in src/assets/img

Core styles like typography, materials components, theming and vendors(bootstrap) are located in the src/assets/scss folder.


Folder Structure
============================

```
|-- src                         
|    |-- app              
|    |   |-- Example                                // Parent folder of the feature you are adding.
|    |   |   |-- example2                           // Child folder that handles features of the parent folder.
|    |   |   |   |-- example2-component.html        // This is the HTML view that will be rendered into our view.
|    |   |   |   |-- example2-component.scss        // This is the SCSS file that will handle the styles for our HTML.
|    |   |   |   |-- example2-component.ts          // This is where we will handle the typescript for this component.
|    |   |   |-- example-component.html             // This is the parent HTML.
|    |   |   |-- example-component.scss             // This is the parent SCSS.
|    |   |   |-- example-component.ts               // This is the parent typescript.
|    |   |-- app-routing.module.ts                  // This is where we import our component and route it to a path(url).
|    |   |-- app.component.scss                     // This is the SCSS for the main app.component.ts file.
|    |   |-- app.component.ts                       // Where our nav lives and views get loaded in <router-outlet>.
|    |   |-- app.module.ts                          // Our components so we can use them throughout the app.
|    |-- assets                                     // Our main folder for our images and core scss.
|    |    |-- img                                   // Our images folder.
|    |    |   |-- example.svg                       // example imgage as .svg.
|    |    |   |-- icons                             // Our custom icons folder.
|    |    |       |-- example.svg                   // custom icons.
|    |    |-- scss  // main styles folder.
|    |        |-- core                              // Handles the core styles coming from material design.
|    |            |-- _typography.scss              // handles apps typograpghy.
|    |            |-- components                    // Core styles for material design components.
|    |                |-- button.scss               // component style for material design.
|    |        |-- _app.variables.scss               // can be used to set scss variables.
|    |        |-- _core.scss                        // imports the core styles.
|    |        |-- _material.variables.scss          // this is the theme for our app.
|    |        |-- bootstrap.scss                    // bootstrap grid system and collape only.
|    |        |-- style.scss                        // import all of our styles for the app.
|    |-- index.html                                 // Our main html file where our app gets rendered.
|    |-- main.ts                                    
|    |-- polyfills.ts
|    |-- tsconfig.app.json  
|-- .angular-cli.json
|-- .gitignore
|-- package.json
|-- readME.md
|-- tsconfig.json

```

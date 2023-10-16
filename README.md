# Disclaimer

This is a bad example of Angular Monorepo because:
1. the `beehive-rg` project need the `assets` from the `beehive-red` project. To be exact, you need to copy the `assets` of the `beehive-red` to `beehive-rg` in order for it to work properly.
2. the `beehive-rg` project compile `beehive-red` project, it defetts the purpose of a monorepo.

Better example of Angular Monorepo. https://github.com/jasonrichdarmawan/angular-library-example

# Documentation

https://kgotgit.medium.com/monorepo-pattern-setting-up-angular-workspace-for-multiple-applications-in-one-single-repository-4e14bc0d0cc0

# AngularBeehiveMonorepo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

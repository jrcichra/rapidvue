# RapidVue
An open source project inspired by Oracle's APEX to be used with other databases such as MariaDB, written with Vue!

## The idea

I personally love Oracle APEX. The ability to rapidly create web development for Database Administrators is a great idea. However, APEX can only run on an Oracle database. This is limiting to smaller projects, and it means I can't run it on a Raspberry Pi.

What if there was an open source alternative where the community could rapidly build web-apps out of a database like with Oracle APEX? That is the vision of this project.

Ideally you could run this on Postgres, MariaDB, and MYSQL. Inital support will go to MariaDB because it's the database I use personally for my pet projects.

## How will it work?

Ideally it will be very similar in functionality and interaction to Oracle APEX. There will be a web interface to build other web apps from. I've been learning Vue and it seems like the way to go for a dynamic component-based user interface. The user themselves only need to know SQL. We may need to do some generic SQL like how Hibernate does in order to allow for easy switchovers of underlying databases.

Using Vue also makes sense to design as well as "plug-in" components into RapidVue. Someone can just write a little JSX and they can build new components that would be used in RapidVue.

## Why "RapidVue?"

This is the best thing that came to my head at the time. The underlying technology would be react, because of the component abilities and the future of web-apps. Oracle APEX uses the tried but true jQuery.

In "theory", and from what my knowledge is right now, nothing would also stop this being a react-native / electron developing platform as well, allowing rapid development of web, desktop, and mobile apps just by writing SQL. Wouldn't that be wild?

What does that mean for a DB <-> APP relationship? RapidVue will communicate with the backend with HTTP APIs for the most flexibility in the future.

## How can I help?

Send me a message! Open an issue! I'd love to talk with you on how to make this idea a reality.

### Some technologies that have promise for this project

* https://material-ui.com/
* https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/page-layout-examples/dashboard/SimpleLineChart.js


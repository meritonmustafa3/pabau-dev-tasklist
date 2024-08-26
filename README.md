## Instructions to start the local environment

- Ensure that you have Docker running
- Open a bash terminal and go to the cloned repo dev-tasklist, now, you can start your local environment using this command:

`docker-compose up --build`

This command will launch the services for: mysql, backend, frontend, and phpmyadmin.

Your backend that powers your API calls is located at port 5000, and can be used inside of your frontend app with http://host.docker.internal:5000 base url.

Once you have confirmed your services are up and running, you can visit localhost:3000 to view your frontend, and this is where the task begins.

## Warning

Because we are using Docker to start our services, any new/update on the frontend app will require you to restart the services;

You can restart it by running this command on root of dev-tasklist repo:

`docker-compose down -v`

And then restarting them with the command:

`docker-compose up --build`

If your laptop cannot handle Docker and/or if you do not have a working laptop at the moment, you have the option to take this interview task directly in our offices in Prishtina with one of our laptops. Please discuss the option with the recruiter to arrange it accordingly.

# A simple Dashboard
This application was build with `React` and `Material UI`.

The default application `port` is `3000`.

## Running application locally
To run the Application, you either run directly or create a `docker` image.

### Creating a local Docker Image
To create an image of our application locally, run the following command:
```bash
docker build -t shepherd/dashboard-app:1.0.0  .
```

#### Running the Docker Image
To run application, enter the following command. Please `note` that you must have installed `Docker Desktop` before you can perform these steps. 
```bash
docker run -dp 3000:3000  shepherd/dashboard-app:1.0.0
```

### Running application locally
Install dependencies `NPM` `packages`
```bash
npm install 
```

Once dependencies are successfully installed, run the application using the command:
```bash
npm start
```

Visit the link `http://localhost:3000` on your browser to view dashboard

## Backend Implementation
Quick tips on the backend implementation

### Weekly summary


`Data Retrieval: `Retrieve relevant data for the weekly summary, such as user activity, course progress, completed assignments, and upcoming deadlines. Utilize database queries or ORM methods to fetch the necessary information.

`Processing and Aggregation:` Process the retrieved data to generate the weekly summary. Aggregate and calculate statistics like the number of courses completed, total study time, average quiz scores, or upcoming events. 

`Scheduling:` Set up a scheduler or job runner to generate the weekly summary automatically. Popular libraries for scheduling tasks in Node.js include node-cron and node-schedule. 

`Notification Delivery:` Deliver how you want to deliver the weekly summary to users. Options include sending an email with an attached summary PDF, generating an HTML page accessible within the platform, or even sending push notifications to mobile devices. 


### Activity Feed

`Data Structure:` Create a data structure to represent various activities in the system. Each activity will contain relevant information such as the user who performed the action, the type of activity (e.g., course enrollment, assignment submission, discussion post), the timestamp, and any additional details specific to the activity type.

`Database Design:` We will design the database schema to store the activity feed data efficiently. uses indexing for faster retrieval and sorting of activities based on timestamp.

`Activity Generation:` Implement logic to generate activities based on user actions and events within the platform. Hooks or event listeners to relevant actions. Message queues via `rabbitMQ` `Apache Kafka` `Nats` etc.

`Filtering and Personalization:` There will be filtering and personalization options to users, allowing them to view activities relevant to their interests. Filters is based on activity type, course, or users they are following. Additionally AI can be leveraged on..

`Real-Time Updates: ` Real-time updates to provide instant notifications to users when new activities occur. WebSockets or server-sent events (SSE) to push updates to connected clients in real time. `Socket.io or SockJS` 

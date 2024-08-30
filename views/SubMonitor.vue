<template>
    <div>
        <div class="inner-content">
            <h1 class="heading"><b>Sentinel</b></h1>
            <p class="paragraph">
                Bug hunting heavily relies on time management. To increase the chances of discovering valid bugs, bug hunters should prioritize checking for fresh assets and changes in the company’s assets they’re investigating.
            </p>
            <p class="paragraph">
                During the initial reconnaissance phase, hunters gather as many subdomains as possible from the target company. To facilitate efficient data management and monitoring, this REST API is developed to retrieve these assets and track various aspects such as newly resolved subdomains, changes in HTTP status codes, IP ranges, titles, and technologies. Notifications are generated to alert the user of these changes. To optimize this process, I am trying to integrated the most suitable tools from 
                <a class="underline text-blue-700" target="_blank" href="https://projectdiscovery.io/">ProjectDiscovery</a> into my application’s workflow.
            </p>
            <p class="paragraph">
                While the REST API is half complete, I am currently working on incorporating ProjectDiscovery’s tools as modules within my project, enabling better customization and eliminating the need for executing them as binary commands in my source code. This ongoing project aims to maintain a comprehensive asset database with corresponding properties, enabling effective tracking of changes and prioritizing vulnerability assessments on the freshest targets.
            </p>
        </div>
        <h3 class="heading"><b>Related files</b></h3>
        <ul>
            <li>
                <a href="https://github.com/0xGwyn/Sentinel" style="color: #ff5733" target="_blank">Code</a>
            </li>
        </ul>
    </div>
    </template>
    
      
      
    <style scoped>
    .hero {
        width: 100%;
        background-position: center center;
        background-size: 100%;
        background-repeat: no-repeat;
        border: 1px solid rgb(0, 0, 0, 0.1);
    }
    
    .images {
        width: 100%;
        height: 350px;
        object-fit: cover;
    }
    
    .images-full {
        width: 100%;
        height: auto;
        object-fit: cover;
    }
    
    .subtitle {
        font-size: 12px;
        color: gray;
        text-align: center;
    }
    
    .heading {
        padding-bottom: 5px;
    }
    
    .inner-content {
        padding-top: 30px;
        padding-bottom: 30px;
    }
    
    h6,
    h3 {
        margin: 0;
        padding: 0;
    }
    </style>
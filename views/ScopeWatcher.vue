<template>
    <div>
        <div class="inner-content">
            <h1 class="heading"><b>Observer</b></h1>
            <p>
                Many bug bounty platform crawlers are open source, and their creators often store newly crawled data as JSON files on platforms like GitHub. They use the action feature to periodically update this data with new information. To enhance efficiency, we can focus on identifying newly added assets within the scope of companies’ bug bounty programs. Our tool sends requests to these repositories, gathers data on companies and their assets, checks for new in-scope assets, and notifies the user on Discord so they can promptly work on these fresh assets.
            </p>
            <p class="paragraph">
                This tool can also serve as a module within a larger workflow in my asset managing and monitoring tool that I’m working on.
            </p>
        </div>
        <h3 class="heading"><b>Related files</b></h3>
        <ul>
            <li>
            </li>
            <li>
                <a href="https://github.com/0xGwyn/Observer" style="color: #ff5733" target="_blank">Code</a>
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
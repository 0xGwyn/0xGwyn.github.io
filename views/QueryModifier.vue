<template>
    <div>
        <div class="inner-content">
            <h1 class="heading"><b>X9</b></h1>
            <p class="paragraph">
                One of my favorite web application vulnerabilities is RXSS (Reflected Cross-Site Scripting), often referred to as a low-hanging fruit bug. Among the types of XSS vulnerabilities, the reflected type occurs when a user-controllable value (usually passed as a parameter in the URL query or request body) is reflected in the response in an unsafe way.
            </p>
            <p class="paragraph">
                This tool manipulates a list of URLs to modify the query parameters or values, generating a list of modified URLs based on different strategies. These modified URLs can be used in other applications like 
                <a class="underline text-blue-700" href="https://github.com/projectdiscovery/nuclei" target="_blank">Nuclei</a> to test for reflections with the right template. It is particularly useful for mass hunting, where we aim to test a large number of targets to uncover reflections. If any reflections are found, we can manually work on them to exploit or escalate the impact and finally report it responsibly to the corresponding company.
            </p>
        </div>
        <h3 class="heading"><b>Related files</b></h3>
        <ul>
            <li>
                <a href="https://github.com/0xGwyn/x9" style="color: #ff5733" target="_blank">Code</a>
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

<template>
    <div>
        <div class="inner-content">
            <h1 class="heading"><b>Origin Fuzzer</b></h1>
            <p class="paragraph">
                Browsers employ various mechanisms to facilitate requests for resources from different origins, including the postMessage feature, JSONP (JSON with Padding), and 
                <a class="underline text-blue-700" target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">CORS (Cross-Origin Resource Sharing)</a> which is the most widely used among them.
            </p>
            <p>
                Misconfiguring CORS can have severe implications. One common misconfiguration involves granting unauthorized access to resources from another origin. For instance, if a bank website has a misconfigured CORS policy in its “/credentials” path, an attacker can exploit this vulnerability by creating a malicious webpage. When unsuspecting victims click on a link leading to the attacker’s webpage, they unknowingly send a request to the bank’s “/credentials” path. The attacker’s code can then read and extract the victims’ credentials, which are sent to the attacker’s server. These misconfigurations often occur due to inadequate enforcement measures, such as flawed regex patterns used for whitelisting or blacklisting.
            </p>
            <p>
                This tool tests a list of URLs for CORS misconfigurations. It does this by manipulating the “Origin” header in requests using a curated list of origins that can potentially bypass regex patterns. By analyzing the CORS-related headers in the responses, the tool identifies any potential vulnerabilities.
            </p>
            <p>
                I have to thank Mr. Reza Sarvani for his idea regarding this fuzzer.
            </p>
        </div>
        <h3 class="heading"><b>Related files</b></h3>
        <ul>
            <li>
                <a href="/files/projects/cors/documentation.pdf" style="color: #ff5733" target="_blank">Documentation file (in Persian)</a>
            </li>
            <li>
                <a href="https://github.com/0xGwyn/OriginFuzzer" style="color: #ff5733" target="_blank">Code</a>
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
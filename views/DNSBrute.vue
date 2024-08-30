<template>
    <div>
        <div class="inner-content">
            <h1 class="heading"><b>ResolveRaptor</b></h1>
            <p class="paragraph">
                Maximizing subdomain discovery is crucial for effective reconnaissance. DNS brute-forcing is a powerful technique used to identify live subdomains by querying multiple subdomains through DNS. To increase the chances of discovering as many subdomains as possible, a custom and intelligent approach is employed.
            </p>
            <p class="paragraph">
                The approach involves two phases. In the first phase, subdomains are passively gathered from various providers like Shodan, Common Crawl, or SecurityTrails and many others using the 
                <a class="underline text-blue-700" target="_blank" href="https://github.com/projectdiscovery/subfinder">Subfinder</a> tool developed by the 
                <a class="underline text-blue-700" target="_blank" href="https://projectdiscovery.io/">ProjectDiscovery</a> team. A list of subdomains is then generated based on a pre-prepared wordlist, and these generated subdomains are merged with the passively obtained ones. This merged list is then given to 
                <a class="underline text-blue-700" target="_blank" href="https://github.com/projectdiscovery/shuffledns">shuffleDNS</a> which is a wrapper around 
                <a class="underline text-blue-700" target="_blank" href="https://github.com/blechschmidt/massdns">MassDNS</a>, a high-performance DNS stub resolver.
            </p>
            <p class="paragraph">
                In the second phase, a smart subdomain generator like 
                <a class="underline text-blue-700" target="_blank" href="https://github.com/projectdiscovery/alterx">AlterX</a> or 
                <a class="underline text-blue-700" target="_blank" href="https://github.com/ProjectAnte/dnsgen">DNSgen</a> is used to generate subdomain names based on specific patterns provided by the resolved subdomains from the first phase. The output of AlterX or DNSgen is then given to shuffleDNS. The final result is the resolved subdomains from both phases that are sorted, and deduplicated.
            </p>
            <p class="paragraph">
                By leveraging this approach, which combines passive gathering, wordlist-based generation, and smart pattern utilization, DNS brute-forcing becomes more effective in discovering a comprehensive list of subdomains associated with the target company.
            </p>
            <p class="paragraph">
                I have to thank 
                <a class="underline text-blue-700" target="_blank" href="https://x.com/voorivex">Mr. Yashar Shahinzadeh</a> for this flow.
            </p>
        </div>
        <h3 class="heading"><b>Related files</b></h3>
        <ul>
            <li>
                <a href="/files/projects/dnsbrute/documentation.pdf" style="color: #ff5733" target="_blank">Documentation file (in Persian)</a>
            </li>
            <li>
                <a href="https://github.com/0xGwyn/ResolveRaptor" style="color: #ff5733" target="_blank">Code</a>
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
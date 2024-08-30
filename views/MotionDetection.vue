<template>
    <div>
        <div class="inner-content">
            <h1 class="heading"><b>Real-Time Motion Detection</b></h1>
            <p class="paragraph">
                During an embedded and real-time systems course, my friend and I chose to work on a motion detection project. Our aim was to develop a real-time system that could detect motion and record it for a specific duration after the motion event occurred. To accomplish this, we utilized the Linux kernel source from the 
                <a class="underline text-blue-700" target="_blank" href="https://github.com/raspberrypi/linux">Raspberry Pi repository</a> on GitHub. We applied the 
                <a class="underline text-blue-700" target="_blank" href="https://wiki.linuxfoundation.org/realtime/start">PREEMPT_RT</a> patch to the kernel and compiled it directly on a Raspberry Pi 4 device after configuring it. 
            </p>
            <p class="paragraph">
                The software for motion detection compared the pixels in consecutive frames captured by a camera module connected to the Raspberry Pi. If motion was detected, the system would initiate recording for a predefined time period.
            </p>
            <p class="paragraph">
                Upon completing the project, we decided to evaluate the real-time performance and capabilities of our system. To achieve this, we employed the cyclictest tool, which measures the system’s latency in responding to periodic events. This allowed us to assess the predictability and consistency of the system’s real-time behavior. We compared the results obtained from the patched kernel with the standard version by plotting them in the form of histogram graphs, providing insights into the performance differences between the two configurations.
            </p>
        </div>
        <h3 class="heading"><b>Related files</b></h3>
        <ul>
            <li>
                <a href="/files/projects/real-time/report.pdf" style="color: #ff5733" target="_blank">Documentation file (in Persian)</a>
            </li>
            <li>
                <a href="/files/projects/real-time/code.zip" style="color: #ff5733" target="_blank">Code</a>
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
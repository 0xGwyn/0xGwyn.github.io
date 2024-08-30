import { defineStore } from "pinia";


export const useWindowsStore = defineStore("windows", {
  state: () => ({
    // Height of Fullscreen Window
    // fullscreenWindowHeight: window.innerHeight + "px",

    activeWindow: "",

    // Active Windows Array State
    activeWindows: [],

    // Z-index State
    zIndex: 2,

    windows: [
      {
        windowId: "BiographyWindow", // Unique ID
        windowState: "close", // Window State [open, close, minimize]
        displayName: "Biography", // Display Name (title under icon)
        windowComponent: "window", // Window Component (can be changed to use modified windows)
        windowContent: "bio", // Window Content (used under slots)
        windowContentPadding: {
          top: null,
          right: null,
          bottom: null,
          left: null,
        }, // Window Content Padding
        position: "absolute", // Window Position
        positionX: "5vw", // Window Position X (when first opened)
        positionY: "5%", // Window Position Y (when first opened)
        iconImage: "bio.png", // Window Icon Image
        altText: "Biography", // Window Icon Alt Text
        fullscreen: false, // Window Fullscreen State [true, false]
        showInAppGrid: true,
        showInNavbar: true,
      },
      {
        windowId: "ResumeWindow", // Unique ID
        windowState: "close", // Window State [open, close, minimize]
        displayName: "Resume", // Display Name (title under icon)
        windowComponent: "window", // Window Component (can be changed to use modified windows)
        windowContent: "resume", // Window Content (used under slots)
        windowContentPadding: {
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
        }, // Window Content Padding
        position: "absolute", // Window Position
        positionX: "10vw", // Window Position X (when first opened)
        positionY: "15vh", // Window Position Y (when first opened)
        iconImage: "resume.png", // Window Icon Image
        altText: "Resume", // Window Icon Alt Text
        fullscreen: false, // Window Fullscreen State [true, false]
        showInAppGrid: true,
        showInNavbar: true,
      },
      {
        windowId: "ImagePreviewWindow",
        windowState: "close",
        displayName: "Media Viewer",
        windowComponent: "ImagePreviewWindow",
        windowContent: "",
        windowContentPadding: {
          top: "1px",
          right: "10px",
          bottom: "10px",
          left: "10px",
        },
        position: "absolute",
        positionX: "6vw",
        positionY: "12vh",
        iconImage: "file.png",
        altText: "Photos",
        fullscreen: false,
        showInAppGrid: false,
        showInNavbar: false,
        // imagePreview: file.src
      },
      // {
      //   windowId: "ProjectsWindow",
      //   windowState: "close",
      //   displayName: "Projects",
      //   windowComponent: "window",
      //   windowContent: "projects",
      //   windowContentPadding: {
      //     top: null,
      //     right: null,
      //     bottom: null,
      //     left: null,
      //   },
      //   position: "absolute",
      //   positionX: "6vw",
      //   positionY: "12vh",
      //   iconImage: "testicon.png",
      //   altText: "Projects",
      //   fullscreen: false,
      //   showInAppGrid: true,
      //   showInNavbar: true,
      // },
    //   {
    //     windowId: "TestBlogWindow",
    //     windowState: "close",
    //     displayName: "Blog",
    //     windowComponent: "window",
    //     windowContent: "testblog",
    //     windowContentPadding: {
    //       top: '0px',
    //       right: '0px',
    //       bottom: '0px',
    //       left: '0px',
    //     },
    //     position: "absolute",
    //     positionX: "6vw",
    //     positionY: "12vh",
    //     iconImage: "noss.webp",
    //     altText: "Blog",
    //     fullscreen: false,
    //     showInAppGrid: true,
    //     showInNavbar: true,
    //   },
    // {
    //     windowId: "AppleWWDC2021",
    //     windowState: "close",
    //     displayName: "WWDC 2021",
    //     windowComponent: "window",
    //     windowContent: "wwdc2021",
    //     windowContentPadding: {
    //       top: null,
    //       right: null,
    //       bottom: null,
    //       left: null,
    //     },
    //     position: "absolute",
    //     positionX: "4vw",
    //     positionY: "12vh",
    //     iconImage: "apple.png",
    //     altText: "Apple WWDC 2021",
    //     fullscreen: false,
    //     showInAppGrid: true,
    //     showInNavbar: true,
    //   },
    //   {
    //     windowId: "AppleWWDC2022",
    //     windowState: "close",
    //     displayName: "WWDC 2022",
    //     windowComponent: "window",
    //     windowContent: "wwdc2022",
    //     windowContentPadding: {
    //       top: null,
    //       right: null,
    //       bottom: null,
    //       left: null,
    //     },
    //     position: "absolute",
    //     positionX: "4vw",
    //     positionY: "12vh",
    //     iconImage: "apple2.png",
    //     altText: "Apple WWDC 2022",
    //     fullscreen: false,
    //     showInAppGrid: true,
    //     showInNavbar: true,
    //   },
    //   {
    //     windowId: "AppleWWDC2023",
    //     windowState: "close",
    //     displayName: "WWDC 2023",
    //     windowComponent: "window",
    //     windowContent: "wwdc2023",
    //     windowContentPadding: {
    //       top: null,
    //       right: null,
    //       bottom: null,
    //       left: null,
    //     },
    //     position: "absolute",
    //     positionX: "4vw",
    //     positionY: "12vh",
    //     iconImage: "apple3.png",
    //     altText: "Apple WWDC 2023",
    //     fullscreen: false,
    //     showInAppGrid: true,
    //     showInNavbar: true,
    //   },
    //   {
    //     windowId: "MailWindow",
    //     windowState: "close",
    //     displayName: "Mail",
    //     windowComponent: "mail",
    //     windowContent: "",
    //     windowContentPadding: {
    //       top: "0",
    //       right: "0",
    //       bottom: "0",
    //       left: "0",
    //     },
    //     position: "absolute",
    //     positionX: "6vw",
    //     positionY: "12vh",
    //     iconImage: "mail.png",
    //     altText: "Mail",
    //     fullscreen: false,
    //     showInAppGrid: true,
    //     showInNavbar: true,
    //   },
      {
        windowId: "ProjectsWindow", // Unique ID
        windowState: "close", // Window State [open, close, minimize]
        displayName: "Projects", // Display Name (title under icon)
        windowComponent: 'FilesWindow', // Window Component (can be changed to use modified windows)
        windowContent: '', // Window Content (used under slots)
        windowContentPadding: {
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px'
        }, // Window Content Padding
        position: "absolute", // Window Position
        positionX: "5vw", // Window Position X (when first opened)
        positionY: "10vh", // Window Position Y (when first opened)
        positionXLarge: "23vw",
        positionYLarge: "7%",
        iconImage: "folder.png", // Window Icon Image
        altText: "Projects", // Window Icon Alt Text
        fullscreen: false, // Window Fullscreen State [true, false]
        showInNavbar: true,
        folderContent: [
            {
              id: 0,
              title: "A real-time motion detection system using Raspberry Pi and a camera module",
              size: 0,
              type: "file",
              altText: "MotionDetection",
            },
            {
              id: 1,
              title: "Dynamic URL Query Modifier for Discovering Reflection and Abnormal Behavior",
              size: 0,
              type: "file",
              altText: "QueryModifier",
            },
            {
              id: 2,
              title: "A custom DNS brute forcing flow",
              size: 0,
              type: "file",
              altText: "DNSBrute",
            },
            {
              id: 3,
              title: "A data-driven analysis of the COVID-19 impact on different countries using Python",
              size: 0,
              type: "file",
              altText: "DataAnalysis",
            },
            {
              id: 4,
              title: "A custom lexical analyzer and parser using the PLY library",
              size: 0,
              type: "file",
              altText: "Compiler",
            },
            {
              id: 5,
              title: "A complex WAN simulation using Packet Tracer",
              size: 0,
              type: "file",
              altText: "PacketTracer",
            },
            {
              id: 6,
              title: "Cross-Origin Resource Sharing misconfiguration fuzzer",
              size: 0,
              type: "file",
              altText: "CorsFuzzer",
            },
            {
              id: 7,
              title: "A concise presentation on the OWASP Top 10",
              size: 0,
              type: "file",
              altText: "OwaspTop10",
            },
            {
              id: 8,
              title: "Scope watcher tool for Bug Bounty platforms",
              size: 0,
              type: "file",
              altText: "ScopeWatcher",
            },
            {
              id: 9,
              title: "Subdomain Data Management and Monitoring REST API",
              size: 0,
              type: "file",
              altText: "SubMonitor",
            },
            {
              id: 10,
              title: "A visual simulation of cache mapping types in Python using the Tkinter library",
              size: 0,
              type: "file",
              altText: "CacheMapping",
            },
            {
              id: 11,
              title: "Robots.txt Content Retrieval Tool utilizing the Internet Archive",
              size: 0,
              type: "file",
              altText: "Robots",
            },
            {
              id: 12,
              title: "Diagramming system architecture, ERDs, flowcharts, and use case diagrams for an Inventory Management Project using Visual Paradigm",
              size: 0,
              type: "file",
              altText: "Diagrams",
            },
          ],
        folderSize: 0
    },
    ],
  }),

  getters: {
    getFullscreenWindowHeight() {
      let height = "0px";
      if (typeof window !== "undefined") {
        height = window.innerHeight + "px";
      }
      return height;
    },
  },

  actions: {
        getWindowById(windowId) {
            return this.windows.find((window) => window.windowId === windowId)
        },

        getWindowFullscreen(windowId) {
            return this.windows.find((window) => window.windowId === windowId).fullscreen
        },

        getActiveWindow() {
            return this.activeWindow
        },

        setActiveWindow(windowId) {
            this.activeWindow = windowId
        },

        setFullscreen(payload) {
            const getArrItem = () => {
                return this.windows.find(
                    (windows) => windows.windowId === payload.windowId
                );
            }
            const window = getArrItem();
            window.fullscreen = payload.fullscreen;
        },

        zIndexIncrement(windowId) {
            this.zIndex++
            if (document.getElementById(windowId)) {
                document.getElementById(windowId).style.zIndex = this.zIndex
            }
        },

        // Push Active Window
        pushActiveWindow(window) {
            this.activeWindows.push(window)
        },

        // Pop Active Window
        popActiveWindow(window) {
            const windowIndex = this.activeWindows.indexOf(window)
            if (windowIndex !== -1) {
                this.activeWindows.splice(windowIndex, 1)
            }
        },

        pushNewWindow(window) {
            this.windows.push(window)
        },

        setPhotoFolderContent(payload) {
            this.photoFolderContent = payload
        },

        setWindowState(payload) {
            // payload = {'windowState': 'open', 'windowId': 'WindowOne'}

            const getArrItem = () => {
                return this.windows.find(
                    (windows) => windows.windowId === payload.windowId
                );
            }

            const window = getArrItem();

            let preventAppendingOpenWindow = false;
            if (window.windowState == "open" || window.windowState == "minimize") {
                preventAppendingOpenWindow = true;
            }

            if (payload.windowState == "open") {
                window.windowState = payload.windowState;
                setTimeout(() => {
                    this.zIndexIncrement(payload.windowId);
                }, 0);
                setTimeout(() => {
                    this.setActiveWindow(payload.windowId);
                }, 0);
                if (preventAppendingOpenWindow == false) {
                    this.pushActiveWindow(window);
                }
            } else if (payload.windowState == "close") {
                setTimeout(() => {
                    window.windowState = payload.windowState;
                }, 0);
                setTimeout(() => {
                    this.popActiveWindow(window);
                }, 0)
                setTimeout(() => {
                    this.setActiveWindow("nil");
                }, 0)
            } else if (payload.windowState == "minimize") {
                setTimeout(() => {
                    window.windowState = payload.windowState;
                }, 0)
                setTimeout(() => {
                    this.setActiveWindow("nil");
                }, 0)
                
            } else {
                console.log("Error: windowState not found or invalid");
            }
        },
    }
});

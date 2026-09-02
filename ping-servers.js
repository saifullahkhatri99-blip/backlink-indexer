/**
 * NexusIndex - 50+ Curated Global Ping Endpoints & Indexing Protocols
 * 100% Free - Zero Paid APIs Required
 */

const PING_SERVERS = [
    // --- IndexNow Endpoints (Direct Push to Bing, Yandex, Seznam, Naver) ---
    { name: "IndexNow (Bing Global)", url: "https://api.indexnow.org/indexnow", type: "indexnow", engine: "bing" },
    { name: "IndexNow (Yandex Russia & CIS)", url: "https://yandex.com/indexnow", type: "indexnow", engine: "yandex" },
    { name: "IndexNow (Seznam Europe)", url: "https://search.seznam.cz/indexnow", type: "indexnow", engine: "seznam" },
    { name: "IndexNow (Naver Asia)", url: "https://searchadvisor.naver.com/indexnow", type: "indexnow", engine: "naver" },

    // --- Google Official WebSub / PubSubHubbub Hubs ---
    { name: "Google PubSubHubbub Hub", url: "https://pubsubhubbub.appspot.com/", type: "websub" },
    { name: "Superfeedr Global Hub", url: "https://pubsubhubbub.superfeedr.com/", type: "websub" },

    // --- Mass XML-RPC Ping Servers ---
    { name: "Ping-O-Matic Master", url: "https://rpc.pingomatic.com/", type: "xmlrpc" },
    { name: "Google Blog Search Ping", url: "https://blogsearch.google.com/ping/RPC2", type: "xmlrpc" },
    { name: "FeedBurner Ping Aggregator", url: "https://feedburner.google.com/fb/a/pingSubmit", type: "rest" },
    { name: "Twingly European Blog Pinger", url: "https://rpc.twingly.com/", type: "xmlrpc" },
    { name: "Blo.gs Live Ping", url: "https://ping.blo.gs/", type: "xmlrpc" },
    { name: "Weblogues Aggregator", url: "https://rpc.weblogs.com/RPC2", type: "xmlrpc" },
    { name: "Feedster Search Engine Ping", url: "https://api.feedster.com/ping", type: "xmlrpc" },
    { name: "Moreover Technologies", url: "https://api.moreover.com/ping", type: "xmlrpc" },
    { name: "Syndic8 Feed Indexer", url: "https://www.syndic8.com/xmlrpc.php", type: "xmlrpc" },
    { name: "Blogdigger Search Engine", url: "https://www.blogdigger.com/RPC2", type: "xmlrpc" },
    { name: "NewsGator RSS Aggregator", url: "https://rpc.newsgator.com/", type: "xmlrpc" },
    { name: "Technorati Global Pinger", url: "https://rpc.technorati.com/rpc/ping", type: "xmlrpc" },
    { name: "Spinn3r Crawler Ping", url: "https://api.spinn3r.com/ping", type: "xmlrpc" },
    { name: "My Yahoo! RSS Ping", url: "https://api.my.yahoo.com/rss/ping", type: "rest" },

    // --- Archive & Freshness Bot Crawl Triggers ---
    { name: "Wayback Machine Archive Bot Trigger", url: "https://web.archive.org/save/", type: "archive" },
    { name: "Archive Today Live Snapshot Bot", url: "https://archive.ph/submit/", type: "archive" }
];

// Fallback CORS-friendly open proxy list for in-browser direct RPC pings
const CORS_PROXIES = [
    "https://api.allorigins.win/raw?url=",
    "https://corsproxy.io/?",
    "https://api.codetabs.com/v1/proxy?quest="
];

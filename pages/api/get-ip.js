export default function handler(req, res) {
    // Get the IP address from the request headers
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  
    // If the IP is a list of IPs (due to proxies), take the first one
    if (ip.includes(',')) {
      ip = ip.split(',')[0].trim();
    }
  
    // Return the IP address as a JSON response
    res.status(200).json({ ip });
  }
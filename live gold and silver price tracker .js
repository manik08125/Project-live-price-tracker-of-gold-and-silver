const apiKey = '9JKENH2GAZTAZHBU3KXN738BU3KXN';
const apiUrl = `https://api.metals.dev/v1/latest?api_key=${apiKey}&currency=INR&unit=toz`;

async function fetchPrices() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status === 'success') {
            const goldPerOunce = data.metals.gold;
            const silverPerOunce = data.metals.silver;

           
            const goldPer10Gram = (goldPerOunce / 31.1035) * 10;
            const silverPerKg = (silverPerOunce / 31.1035) * 1000;

            
            document.getElementById("gold").innerText =
                `🇮🇳 Gold Price (10g): ₹${goldPer10Gram.toFixed(2).toLocaleString("en-IN")}`;
            document.getElementById("silver").innerText =
                `🇮🇳 Silver Price (1kg): ₹${silverPerKg.toFixed(2).toLocaleString("en-IN")}`;
        } else {
            document.getElementById("gold").innerText = "Failed to load gold price.";
            document.getElementById("silver").innerText = "Failed to load silver price.";
        }
    } catch (error) {
        console.error("Error fetching prices:", error);
        document.getElementById("gold").innerText = "Error loading gold price.";
        document.getElementById("silver").innerText = "Error loading silver price.";
    }
}

fetchPrices();

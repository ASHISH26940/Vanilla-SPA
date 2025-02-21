export const StartPage = async () => {
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Custom JS SPA</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            margin: 0;
            padding: 0;
            color: #000;
            background-color: #fff;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        header {
            background-color: #000;
            color: #fff;
            padding: 20px 0;
        }
        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .logo {
            font-size: 1.5rem;
            font-weight: bold;
        }
        .nav-links a {
            color: #fff;
            text-decoration: none;
            margin-left: 20px;
        }
        .hero {
            text-align: center;
            padding: 80px 0;
        }
        h1 {
            font-size: 3rem;
            margin-bottom: 20px;
        }
        .subtitle {
            font-size: 1.5rem;
            color: #666;
            margin-bottom: 40px;
        }
        .cta-button {
            display: inline-block;
            background-color: #0070f3;
            color: #fff;
            text-decoration: none;
            padding: 12px 24px;
            border-radius: 5px;
            font-weight: bold;
            transition: background-color 0.3s ease;
        }
        .cta-button:hover {
            background-color: #0056b3;
        }
        .features {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            padding: 60px 0;
        }
        .feature {
            flex-basis: calc(33.333% - 40px);
            margin-bottom: 40px;
            text-align: center;
        }
        .feature h3 {
            font-size: 1.5rem;
            margin-bottom: 10px;
        }
        .feature p {
            color: #666;
        }
        footer {
            background-color: #f6f6f6;
            color: #666;
            text-align: center;
            padding: 20px 0;
            margin-top: 40px;
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <nav>
                <div class="logo">Your SPA</div>
                <div class="nav-links">
                    <a href="#features">Features</a>
                    <a href="#docs">Docs</a>
                    <a href="#about">About</a>
                </div>
            </nav>
        </div>
    </header>

    <main>
        <section class="hero">
            <div class="container">
                <h1>Welcome to Your Custom JS SPA</h1>
                <p class="subtitle">The lightweight and powerful solution for modern web applications</p>
                <a href="#get-started" class="cta-button">Get Started</a>
            </div>
        </section>

        <section class="features" id="features">
            <div class="container">
                <div class="feature">
                    <h3>Fast Performance</h3>
                    <p>Optimized for speed and efficiency, ensuring your app loads quickly and runs smoothly.</p>
                </div>
                <div class="feature">
                    <h3>Easy to Use</h3>
                    <p>Simple API and intuitive design make development a breeze for beginners and experts alike.</p>
                </div>
                <div class="feature">
                    <h3>Flexible & Customizable</h3>
                    <p>Built to be adaptable, allowing you to create unique experiences for your users.</p>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <div class="container">
            <p>&copy; 2025 Your Custom JS SPA. All rights reserved.</p>
            <p>Ashish Gupta</p>
        </div>
    </footer>
</body>
</html>


  `
};

/* Tailwind Configuration for Punjab Floods Donation Page */

tailwind.config = {
    theme: {
        extend: {
            colors: {
                /* Using HSL for better color control and hierarchy */
                'saffron': 'hsl(20, 100%, 61%)',
                'saffron-dark': 'hsl(20, 100%, 45%)',
                'saffron-light': 'hsl(20, 100%, 75%)',
                'brand-blue': 'hsl(200, 90%, 47%)',
                'brand-blue-dark': 'hsl(200, 90%, 35%)',
                'brand-blue-light': 'hsl(200, 90%, 65%)',
                'trust-blue': 'hsl(224, 64%, 33%)',
                'trust-blue-dark': 'hsl(224, 64%, 25%)',
                'trust-blue-light': 'hsl(224, 64%, 45%)',
                'hope-green': 'hsl(160, 84%, 39%)',
                'hope-green-dark': 'hsl(160, 84%, 30%)',
                'hope-green-light': 'hsl(160, 84%, 50%)',
                'warm-sand': 'hsl(60, 9%, 98%)',
            },
            fontFamily: {
                'display': ['Playfair Display', 'serif'],
                'sans': ['Inter', 'sans-serif'],
            }
        }
    }
}
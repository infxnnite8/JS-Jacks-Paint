function configureListeners() {
    let images = document.querySelector (pn1, pn2, pn3, pn4, pn5, pn6, pn7, pn8, pn9,);// select img elements  


     for (var i = 0; i < images.length; i++) {        
        let img = (images[i])
        // iterate over images and add mouseover event listeners      
    } 
}

function addOpacity(event) {
    // add appropriate CSS class
    event.target.classList.add('dim');
    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
     //remove appropriate CSS class

    let element = document.getElementById('color-price');
        element.textContent = 'dim';
        
    let color = document.getElementById('color-name');
        color.textContent = 'dim'; 

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1':     
        price = 14.99;
        colorName = 'LimeGreen';
        break;
            // set variables for price and color name and invoke a function to update the price     
               
        case 'pn2':
            price = 11.14;
            colorName = 'Medium Brown'
            
            // set variables for price and color name and invoke a function to update the price    
            break;            
        
            case 'pn3':
                price = 22.99;
                colorName = 'Royal Blue';
            // set variables for price and color name and invoke a function to update the price  
            break;   
        case 'pn4':
            price = 4.99
            colorName = 'Solid Black';

            // set variables for price and color name and invoke a function to update the price  
            break;   
        case 'pn5':
            price = 8.22;
            colorName = 'Solid Cyan'
            // set variables for price and color name and invoke a function to update the price       
            break;   
        case 'pn6':
            price = 11.99;
            colorName = 'Solid Purple';
            // set variables for price and color name and invoke a function to update the price        
            break;   
        case 'pn7':
            price = 13.42;
            colorName = '13.42';

            // set variables for price and color name and invoke a function to update the price 
            break;   
        case 'pn8':
            price = 21.98;
            colorName = 'Solid White';
            // set variables for price and color name and invoke a function to update the price   
            break;   
        case 'pn9':
            price = 14.99;
            colorName = 'Solid Yellow';
            // set variables for price and color name and invoke a function to update the price 
            break;   
          default:              
    }

    function updatePrice(colorName, price)
    {       
        let colorPrice = document.pn1 (14.99)
        
        
        let color = document.pn1 ('Lime Green ') 
    }
    
}

{
    function updatePrice(colorName, price)
    {       
        let colorPrice = document.pn2 (11.14)
        
        
        let color = document.pn2 ('Medium Brown')
    }
    
}

{
    function updatePrice(colorName, price)
    {       
        let colorPrice = document.pn3 (22.99)
        
        
        let color = document.pn3 ('Royal Blue')
    }
    
}

{
    function updatePrice(colorName, price)
    {       
        let colorPrice = document.pn4 (4.99)
        
        
        let color = document.pn4 ('Solid Black')
    }
    
}
{
    function updatePrice(colorName, price)
    {       
        let colorPrice = document.pn5 (8.22)
        
        
        let color = document.pn5 ('Solid Cyan')
    }
    
}

{
    function updatePrice(colorName, price)
    {       
        let colorPrice = document.pn6 (11.99)
        
        
        let color = document.pn6 ('Solid Purple')
    }
    
}

{
    function updatePrice(colorName, price)
    {       
        let colorPrice = document.pn7 (13.42)
        
        
        let color = document.pn7 ('Solid Red')
    }
    
}

{
    function updatePrice(colorName, price)
    {       
        let colorPrice = document.pn8 (21.98)
        
        
        let color = document.p8 ('Solid White')
    }
    
}

{
    function updatePrice(colorName, price)
    {       
        let colorPrice = document.pn9 (14.99)
        
        
        let color = document.pn9 ('Solid Yellow')
    }
    
}

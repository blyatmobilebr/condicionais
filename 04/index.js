function nomeDaBucha(numero) {
    switch (numero) {
        case 0:
            return "BRANCO";
        
        case 1:
            return "ÀS";
        
        case 2: 
            return "DUQUE";
        
        case 3:
            return "TERNO";
    
        case 4:
            return "QUADRA";
            
        case 5:
            return "QUINA";
    
        case 6:
            return "SENA";
    }
    
}


console.log(nomeDaBucha(5));
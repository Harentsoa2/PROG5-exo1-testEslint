class Wallet {
    constructor(couleur, taille) {
        this.couleur = couleur;
        this.taille = taille;
        this.vola = 0;      
        this.opened = false; 
        this.lost = false;  
    }

  
    open() {
        this.opened = true;
    }

 
    close() {
        this.opened = false;
    }


    addVola(montant) {
        if (this.lost) {
            return; 
        }
        if (!this.opened) {
            this.open();
        }
        this.vola += montant;
    }

    getVola() {
        return this.vola;
    }

    checkVola() {
        return `Solde actuel : ${this.vola} Ar`;
    }
 
    isLost() {
        this.lost = true;
    }
}


export default Wallet;
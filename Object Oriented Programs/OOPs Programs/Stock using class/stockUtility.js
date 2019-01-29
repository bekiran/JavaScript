class Stock{
    constructor(name,numberofshare,shareprice)
    {
        this.name=name,
        this.numberofshare=numberofshare,
        this.shareprice=shareprice
    }
    shareprice()
    {
        return this.numberofshare*this.shareprice;
    }
}

module.exports={Stock}
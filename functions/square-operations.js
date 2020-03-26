const operations = {
    /** 
     * Get area
     * @param {number} side 
     */
    getArea: function (side) {
        return Math.pow(side, 2);

    },
   /**
    * Perimeter to square
    * @param {number*} side 
    */
    getPerimeter: function(side){
        return side*4
    },
    getDeagonal: function (side){
        return Math.sqrt(Math.pow(side, 2)+Math.pow(side, 2))
    }
};

module.exports = operations;

function Bobify() {
    var verb = document.getElementById('input').value
    document.getElementById("theTable").style.display = "block";
    if(verb.length == 3){
        var faolFeel = verb[0]
        var ainolFeel = verb[1]
        var laolFeel = verb[2]
    
        let estefAlVerb = estefAl(faolFeel, ainolFeel, laolFeel)

        document.getElementById("feelMazi-estefAl").innerText = estefAlVerb[0]
        document.getElementById("feelMozare-estefAl").innerText = estefAlVerb[1]
        document.getElementById("feelAmr-estefAl").innerText = estefAlVerb[2]
        document.getElementById("feelMasdar-estefAl").innerText = estefAlVerb[3]

        let efteAlVerb = efteAl(faolFeel, ainolFeel, laolFeel)
        
        document.getElementById("feelMazi-efteAl").innerText = efteAlVerb[0]
        document.getElementById("feelMozare-efteAl").innerText = efteAlVerb[1]
        document.getElementById("feelAmr-efteAl").innerText = efteAlVerb[2]
        document.getElementById("feelMasdar-efteAl").innerText = efteAlVerb[3]

        let enfeAlVerb = enfeAl(faolFeel, ainolFeel, laolFeel)

        document.getElementById("feelMazi-enfeAl").innerText = enfeAlVerb[0]
        document.getElementById("feelMozare-enfeAl").innerText = enfeAlVerb[1]
        document.getElementById("feelAmr-enfeAl").innerText = enfeAlVerb[2]
        document.getElementById("feelMasdar-enfeAl").innerText = enfeAlVerb[3]

        let tafaOolVerb = tafaOol(faolFeel, ainolFeel, laolFeel)

        document.getElementById("feelMazi-tafaOol").innerText = tafaOolVerb[0]
        document.getElementById("feelMozare-tafaOol").innerText = tafaOolVerb[1]
        document.getElementById("feelAmr-tafaOol").innerText = tafaOolVerb[2]
        document.getElementById("feelMasdar-tafaOol").innerText = tafaOolVerb[3]

        let tafaOlVerb = tafaOl(faolFeel, ainolFeel, laolFeel)

        document.getElementById("feelMazi-tafaOl").innerText = tafaOlVerb[0]
        document.getElementById("feelMozare-tafaOl").innerText = tafaOlVerb[1]
        document.getElementById("feelAmr-tafaOl").innerText = tafaOlVerb[2]
        document.getElementById("feelMasdar-tafaOl").innerText = tafaOlVerb[3]

        let tafIlVerb = tafIl(faolFeel, ainolFeel, laolFeel)

        document.getElementById("feelMazi-tafIl").innerText = tafIlVerb[0]
        document.getElementById("feelMozare-tafIl").innerText = tafIlVerb[1]
        document.getElementById("feelAmr-tafIl").innerText = tafIlVerb[2]
        document.getElementById("feelMasdar-tafIl").innerText = tafIlVerb[3]

        let mofaEleVerb = mofaEle(faolFeel, ainolFeel, laolFeel)

        document.getElementById("feelMazi-mofaEle").innerText = mofaEleVerb[0]
        document.getElementById("feelMozare-mofaEle").innerText = mofaEleVerb[1]
        document.getElementById("feelAmr-mofaEle").innerText = mofaEleVerb[2]
        document.getElementById("feelMasdar-mofaEle").innerText = mofaEleVerb[3]

        let efAlVerb = efAl(faolFeel, ainolFeel, laolFeel)

        document.getElementById("feelMazi-efAl").innerText = efAlVerb[0]
        document.getElementById("feelMozare-efAl").innerText = efAlVerb[1]
        document.getElementById("feelAmr-efAl").innerText = efAlVerb[2]
        document.getElementById("feelMasdar-efAl").innerText = efAlVerb[3]

    
        function estefAl(faolFeel, ainolFeel, laolFeel) {
            //FaOlFeel
            let faolFeelMazi = "اِسْتَ" + faolFeel + "ْ"
            let faolFeelMozare = "یَسْتَ" + faolFeel + "ْ"
            let faolFeelAmr = "اِسْتَ" + faolFeel + "ْ"
            let faolFeelMasdar = "اِسْتِ" + faolFeel + "ْ"
            //AinOlFeel
            let ainolFeelMazi = ainolFeel + "َ"
            let ainolFeelMozare = ainolFeel + "ِ"
            let ainolFeelAmr = ainolFeel + "ِ"
            let ainolFeelMasdar = ainolFeel + "ا"
            //LaOlFeel
            let laolFeelMazi = laolFeel + "َ"
            let laolFeelMozare = laolFeel + "ُ"
            let laolFeelAmr = laolFeel + "ْ"
            let laolFeelMasdar = laolFeel
            
            let feelMazi = faolFeelMazi + ainolFeelMazi + laolFeelMazi
            let feelMozare = faolFeelMozare + ainolFeelMozare + laolFeelMozare
            let feelAmr = faolFeelAmr + ainolFeelAmr + laolFeelAmr
            let feelMasdar = faolFeelMasdar + ainolFeelMasdar + laolFeelMasdar
    
            let endResult = [feelMazi, feelMozare, feelAmr, feelMasdar]
    
            return endResult
            
        }
    
        function efteAl(faolFeel, ainolFeel, laolFeel) {
            //FaOlFeel
            let faolFeelMazi = "اِ" + faolFeel + "ْتَ"
            let faolFeelMozare = "یَ" + faolFeel + "ْتَ"
            let faolFeelAmr = "اِ" + faolFeel + "ْتَ"
            let faolFeelMasdar = "اِ" + faolFeel + "ْتِ"
            //AinOlFeel
            let ainolFeelMazi = ainolFeel + "َ"
            let ainolFeelMozare = ainolFeel + "ِ"
            let ainolFeelAmr = ainolFeel + "ِ"
            let ainolFeelMasdar = ainolFeel + "ا"
            //LaOlFeel
            let laolFeelMazi = laolFeel + "َ"
            let laolFeelMozare = laolFeel + "ُ"
            let laolFeelAmr = laolFeel + "ْ"
            let laolFeelMasdar = laolFeel
            
            let feelMazi = faolFeelMazi + ainolFeelMazi + laolFeelMazi
            let feelMozare = faolFeelMozare + ainolFeelMozare + laolFeelMozare
            let feelAmr = faolFeelAmr + ainolFeelAmr + laolFeelAmr
            let feelMasdar = faolFeelMasdar + ainolFeelMasdar + laolFeelMasdar
    
            let endResult = [feelMazi, feelMozare, feelAmr, feelMasdar]
            return endResult
        }
    
        function enfeAl(faolFeel, ainolFeel, laolFeel) {
            //FaOlFeel
            let faolFeelMazi = "اِنْ" + faolFeel + "َ"
            let faolFeelMozare = "یَنْ" + faolFeel + "َ"
            let faolFeelAmr = "اِنْ" + faolFeel + "َ"
            let faolFeelMasdar = "اِنْ" + faolFeel + "ِ"
            //AinOlFeel
            let ainolFeelMazi = ainolFeel + "َ"
            let ainolFeelMozare = ainolFeel + "ِ"
            let ainolFeelAmr = ainolFeel + "ِ"
            let ainolFeelMasdar = ainolFeel + "ا"
            //LaOlFeel
            let laolFeelMazi = laolFeel + "َ"
            let laolFeelMozare = laolFeel + "ُ"
            let laolFeelAmr = laolFeel + "ْ"
            let laolFeelMasdar = laolFeel
            
            let feelMazi = faolFeelMazi + ainolFeelMazi + laolFeelMazi
            let feelMozare = faolFeelMozare + ainolFeelMozare + laolFeelMozare
            let feelAmr = faolFeelAmr + ainolFeelAmr + laolFeelAmr
            let feelMasdar = faolFeelMasdar + ainolFeelMasdar + laolFeelMasdar
    
            let endResult = [feelMazi, feelMozare, feelAmr, feelMasdar]
    
            return endResult
        }
    
        function tafaOol(faolFeel, ainolFeel, laolFeel) {
            //FaOlFeel
            let faolFeelMazi = "تَ" + faolFeel + "َ"
            let faolFeelMozare = "یَتَ" + faolFeel + "َ"
            let faolFeelAmr = "تَ" + faolFeel + "َ"
            let faolFeelMasdar = "تَ" + faolFeel + "َ"
            //AinOlFeel
            let ainolFeelMazi = ainolFeel + "َّ"
            let ainolFeelMozare = ainolFeel + "َّ"
            let ainolFeelAmr = ainolFeel + "َّ"
            let ainolFeelMasdar = ainolFeel + "ُّ"
            //LaOlFeel
            let laolFeelMazi = laolFeel + "َ"
            let laolFeelMozare = laolFeel + "ُ"
            let laolFeelAmr = laolFeel + "ْ"
            let laolFeelMasdar = laolFeel
            
            let feelMazi = faolFeelMazi + ainolFeelMazi + laolFeelMazi
            let feelMozare = faolFeelMozare + ainolFeelMozare + laolFeelMozare
            let feelAmr = faolFeelAmr + ainolFeelAmr + laolFeelAmr
            let feelMasdar = faolFeelMasdar + ainolFeelMasdar + laolFeelMasdar
    
            let endResult = [feelMazi, feelMozare, feelAmr, feelMasdar]
    
            return endResult
        }
    
        function tafaOl(faolFeel, ainolFeel, laolFeel) {
            //FaOlFeel
            let faolFeelMazi = "تَ" + faolFeel + "ا"
            let faolFeelMozare = "یَتَ" + faolFeel + "ا"
            let faolFeelAmr = "تَ" + faolFeel + "ا"
            let faolFeelMasdar = "تَ" + faolFeel + "ا"
            //AinOlFeel
            let ainolFeelMazi = ainolFeel + "َ"
            let ainolFeelMozare = ainolFeel + "َ"
            let ainolFeelAmr = ainolFeel + "َ"
            let ainolFeelMasdar = ainolFeel + "ُ"
            //LaOlFeel
            let laolFeelMazi = laolFeel + "َ"
            let laolFeelMozare = laolFeel + "ُ"
            let laolFeelAmr = laolFeel + "ْ"
            let laolFeelMasdar = laolFeel
            
            let feelMazi = faolFeelMazi + ainolFeelMazi + laolFeelMazi
            let feelMozare = faolFeelMozare + ainolFeelMozare + laolFeelMozare
            let feelAmr = faolFeelAmr + ainolFeelAmr + laolFeelAmr
            let feelMasdar = faolFeelMasdar + ainolFeelMasdar + laolFeelMasdar
    
            let endResult = [feelMazi, feelMozare, feelAmr, feelMasdar]

            console.log(endResult)
    
            return endResult
        }
    
        function tafIl(faolFeel, ainolFeel, laolFeel) {
            //FaOlFeel
            let faolFeelMazi = faolFeel + "َ"
            let faolFeelMozare = "یُ" + faolFeel + "َ"
            let faolFeelAmr = faolFeel + "َ"
            let faolFeelMasdar = "تَ" + faolFeel + "ْ"
            //AinOlFeel
            let ainolFeelMazi = ainolFeel + "َّ"
            let ainolFeelMozare = ainolFeel + "ِّ"
            let ainolFeelAmr = ainolFeel + "ِّ"
            let ainolFeelMasdar = ainolFeel + "ی"
            //LaOlFeel
            let laolFeelMazi = laolFeel + "َ"
            let laolFeelMozare = laolFeel + "ُ"
            let laolFeelAmr = laolFeel + "ْ"
            let laolFeelMasdar = laolFeel
            
            let feelMazi = faolFeelMazi + ainolFeelMazi + laolFeelMazi
            let feelMozare = faolFeelMozare + ainolFeelMozare + laolFeelMozare
            let feelAmr = faolFeelAmr + ainolFeelAmr + laolFeelAmr
            let feelMasdar = faolFeelMasdar + ainolFeelMasdar + laolFeelMasdar
    
            let endResult = [feelMazi, feelMozare, feelAmr, feelMasdar]
    
            return endResult
        }
    
        function mofaEle(faolFeel, ainolFeel, laolFeel) {
            //FaOlFeel
            let faolFeelMazi = faolFeel + "ا"
            let faolFeelMozare = "یُ" + faolFeel + "ا"
            let faolFeelAmr = faolFeel + "ا"
            let faolFeelMasdar = "مُ" + faolFeel + "ا"
            //AinOlFeel
            let ainolFeelMazi = ainolFeel + "َ"
            let ainolFeelMozare = ainolFeel + "ِ"
            let ainolFeelAmr = ainolFeel + "ِ"
            let ainolFeelMasdar = ainolFeel + "َ"
            //LaOlFeel
            let laolFeelMazi = laolFeel + "َ"
            let laolFeelMozare = laolFeel + "ُ"
            let laolFeelAmr = laolFeel + "ْ"
            let laolFeelMasdar = laolFeel + "َة"
            
            let feelMazi = faolFeelMazi + ainolFeelMazi + laolFeelMazi
            let feelMozare = faolFeelMozare + ainolFeelMozare + laolFeelMozare
            let feelAmr = faolFeelAmr + ainolFeelAmr + laolFeelAmr
            let feelMasdar = faolFeelMasdar + ainolFeelMasdar + laolFeelMasdar
    
            let endResult = [feelMazi, feelMozare, feelAmr, feelMasdar]
    
            return endResult
        }
    
        function efAl(faolFeel, ainolFeel, laolFeel) {
            //FaOlFeel
            let faolFeelMazi = "أَ" + faolFeel + "ْ"
            let faolFeelMozare = "یُ" + faolFeel + "ْ"
            let faolFeelAmr = "أَ" + faolFeel + "ْ"
            let faolFeelMasdar = "إِ" + faolFeel + "ْ"
            //AinOlFeel
            let ainolFeelMazi = ainolFeel + "َ"
            let ainolFeelMozare = ainolFeel + "ِ"
            let ainolFeelAmr = ainolFeel + "ِ"
            let ainolFeelMasdar = ainolFeel + "ا"
            //LaOlFeel
            let laolFeelMazi = laolFeel + "َ"
            let laolFeelMozare = laolFeel + "ُ"
            let laolFeelAmr = laolFeel + "ْ"
            let laolFeelMasdar = laolFeel
            
            let feelMazi = faolFeelMazi + ainolFeelMazi + laolFeelMazi
            let feelMozare = faolFeelMozare + ainolFeelMozare + laolFeelMozare
            let feelAmr = faolFeelAmr + ainolFeelAmr + laolFeelAmr
            let feelMasdar = faolFeelMasdar + ainolFeelMasdar + laolFeelMasdar
    
            let endResult = [feelMazi, feelMozare, feelAmr, feelMasdar]
    
            return endResult
        }
    
    }else{
        alert(" بیشتر یا کمتر از سه حرف وارد نموده اید")
    }
}
// const verb = "جلس"
// alert("سلام")

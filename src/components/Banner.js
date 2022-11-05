import '../styles/Banner.css'
import logo from '../assets/logo.png'

//Les images sont importées par React grâce à Webpack.


// const styleBanner = {
//     color:'black',
//     padding:32,
//     textAlign:'right',
//     borderBottom : 'solid 3px black',
// };

/***
 * Pour appliquer un style il existe deux methode :
 * 
 * 1- En utilisant attribut style puis  passer un objet (styleBanner) comme valeur : 
 *    style={styleBanner}
 * 2- En utilisant className donner un nom puis créer un style avec .className 
 *    n'oublie pas l'importer le fichier css ici
 * 
 * ***/

function Banner() {

    const title ='La maison de jungle'
    return(
    <div className='lmj-banner'>
        <img src={logo} className='lmj-logo' alt='La maison jungle'/>
        <h1 className='lmj-title'>{title}</h1>
    </div>);
}

export default Banner
import CareScale from './CareScale'
import '../styles/PlantItem.css'

// function handleClick(plantName) {
//     alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
// }


function handleClick(e) {
    console.log('✨ Ceci est mon event :', e)
}

function PlantItem({ id, cover, name, water, light }) {
	return (
		<li key={id} className='lmj-plant-item' onClick={() => handleClick(name)}>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

export default PlantItem

// React event syntax

// l'événement s'écrit dans une balise encamelCase;

// vous déclarez l'événement à capter, et lui passez entre accolades la fonction à appeler ;

// contrairement au JS, dans la quasi totalité des cas, vous n'avez pas besoin d'utiliser addEventListener

// click event : onClick={() => handleClick(name)}
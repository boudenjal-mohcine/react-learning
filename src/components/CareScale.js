import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

// Ici, il s'agit d'une manière de faire.
//Vous auriez aussi pu utiliser une fonction qui retourne l'élément souhaité, ou bien faire directement des conditions
const quantityLabel = {
	1: 'peu',
	2: 'modérément',
	3: 'beaucoup'
}

function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType =
		careType === 'light' ? (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)

	return (
		<div
			onClick={() =>
				alert(
					`Cette plante requiert ${quantityLabel[scaleValue]} ${
						careType === 'light' ? 'de lumière' : "d'arrosage"
					}`
				)
			}
		>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale
/*** 
 * Les props sont donc des objets que l'on peut récupérer dans les paramètres de notre composant fonction.
 * Dans le component ShoppingList on va utiliser ce prop qui est scaleValue : <CareScale scaleValue={plant.light} et <CareScale careType={plant.water} />
 * 
 * la déstructuration. Elle permet directement de déclarer une variable et de lui assigner la valeur d'une propriété d'un objet.
    Ici on peut donc faire :

    const {scaleValue, careType} = props
    // On évite de multiplier les déclarations qui sans cette syntaxe auraient été :
    // const scaleValue = props.scaleValue et
    // const careType = props.careType
***/
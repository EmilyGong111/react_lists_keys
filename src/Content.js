// import { useState } from 'react';
// import { FaTrashAlt } from 'react-icons/fa';

const Content = () => {
//     const [items, setItems] = useState([
//         {
//             id: 1,
//             checked: true,
//             item: "One half pound bag of Cocoa Covered Almonds Unsalted"
//         },
//         {
//             id: 2,
//             checked: false,
//             item: "Item 2"
//         },
//         {
//             id: 3,
//             checked: false,
//             item: "Item 3"
//         }
//     ]);
    const handleCheck1 = ()=>{
        console.log('You clicked it')
    }
    const handleCheck2 = (name)=>{
        console.log(`${name} clicked it`)
    }
    const handleCheck3 = (e)=>{
        console.log(e)
        console.log(e.target)
        console.log(e.target.innerText)
    }
    // const handleCheck = (id) => {
    //     const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    //     setItems(listItems);
    //     localStorage.setItem('shoppinglist', JSON.stringify(listItems));
    // }

    // const handleDelete = (id) => {
    //     const listItems = items.filter((item) => item.id !== id);
    //     setItems(listItems);
    //     localStorage.setItem('shoppinglist', JSON.stringify(listItems));
    // }

    return (
        <main>
            <button onClick={handleCheck1}>Click It</button>
            {/* function will be immediately called with the way below */}
            <button onClick={handleCheck2('Emily')}>Click It</button> 
            {/* when you need to pass a parameter, you need a anonymous function to call the function you want to apply. As below */}
            <button onClick={() => handleCheck2('Emily')}>Click It</button>
            <button onClick={(e) => handleCheck3(e)}>Click It</button>
{/* 
            {items.length ? (
                <ul>
                    {items.map((item) => (
                        <li className="item" key={item.id}>
                            <input
                                type="checkbox"
                                onChange={() => handleCheck(item.id)}
                                checked={item.checked}
                            />
                            <label
                                style={(item.checked) ? { textDecoration: 'line-through' } : null}
                                onDoubleClick={() => handleCheck(item.id)}
                            >{item.item}</label>
                            <FaTrashAlt
                                onClick={() => handleDelete(item.id)}
                                role="button"
                                tabIndex="0"
                            />
                        </li>
                    ))}
                </ul>
            ) : (
                <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
            )} */}
        </main>
    )
}

export default Content

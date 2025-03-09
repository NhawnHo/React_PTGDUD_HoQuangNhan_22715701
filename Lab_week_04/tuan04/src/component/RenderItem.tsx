import { useEffect, useState } from 'react';

interface item {
  id: number;
  imageUrl: string;
  name: string;
}

function RenderItem() {
  const [array, setArray] = useState<item[]>([]);
  useEffect(() => {
    fetch('https://67cd3400dd7651e464ed9e48.mockapi.io/imageChefify')
        .then((response) => response.json())
        .then((d: item[]) => {
          setArray(d);
          console.log(d);
          
        });
  }, [])
    
    return (
        <ul>
            {array.map((item) => (
                <li key={item.id}>
                    <p>{item.id}</p>
                    <img src={item.imageUrl} alt="Hình ảnh" width={100} />
                    <p>{item.name}</p>
                </li>
            ))}
        </ul>
    );
}
export default RenderItem;

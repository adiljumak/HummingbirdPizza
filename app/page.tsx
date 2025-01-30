import { Container, Title, Categories, SortPopup, TopBar, Filters } from "@/components/shared";
import { ProductsGroupList } from "@/components/shared/products-group-list";



export default function Home() {
  return <>
  
  <Container className="mt-10">
    <Title text="Все пиццы" size="lg" className="font-extrabold"/>  
  </Container>
  <TopBar />

  <Container className="mt-10 pb-14">
    <div className="flex gap-[80px]">


        <div className="w-[250px]">
          <Filters />
        </div>

        <div className="flex-1">
          <div className="flex flex-col gap-16">
            <ProductsGroupList title="Пиццы" items={[{
              id: 1,
              name: 'imya',
              imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d5f837255b58b25a62c60ffdb38.avif',
              price: 550,
              items: [{price: 550}],

            },
            {
              id: 2,
              name: 'imya',
              imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d5f837255b58b25a62c60ffdb38.avif',
              price: 550,
              items: [{price: 550}],

            },
            {
              id: 3,
              name: 'imya',
              imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d5f837255b58b25a62c60ffdb38.avif',
              price: 550,
              items: [{price: 550}],

            },
            {
              id: 4,
              name: 'imya',
              imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d5f837255b58b25a62c60ffdb38.avif',
              price: 550,
              items: [{price: 550}],

            },
            ]} categoryId={1} />
            <ProductsGroupList title="Комбо" items={[{
              id: 1,
              name: 'imya',
              imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d5f837255b58b25a62c60ffdb38.avif',
              price: 550,
              items: [{price: 550}],

            },
            {
              id: 2,
              name: 'imya',
              imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d5f837255b58b25a62c60ffdb38.avif',
              price: 550,
              items: [{price: 550}],

            },
            {
              id: 3,
              name: 'imya',
              imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d5f837255b58b25a62c60ffdb38.avif',
              price: 550,
              items: [{price: 550}],

            },
            {
              id: 4,
              name: 'imya',
              imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d5f837255b58b25a62c60ffdb38.avif',
              price: 550,
              items: [{price: 550}],

            },
            ]} categoryId={2} />

            {/* <ProductCard id={0} name={'imya'} price={550} imageUrl={'https://media.dodostatic.net/image/r:584x584/11ee7d5f837255b58b25a62c60ffdb38.avif'} /> */}
            {/* <ProductGroupList title="Пиццы" items={[1, 2, 3, 4, 5]} />
            <ProductGroupList title="Комбо" items={[1, 2, 3, 4, 5]} /> */}
          </div>

        </div>
    </div>  


  </Container>

  <div style={{height: '3000px'}}></div>

  
  
  </>;

}

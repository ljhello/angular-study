import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  private products: Product[]=[
    new Product(1,"第一个商品",1.45,3.5,"这是我即将上线的第一个商品",["电子产品","硬件设备"]),
    new Product(2,"第二个商品",55.45,2.5,"这是我即将上线的第二个商品",["电子产品","硬件设备"]),
    new Product(3,"第三个商品",4.5,4.5,"这是我即将上线的第三个商品",["电子产品","硬件设备"]),
    new Product(4,"第四个商品",100.5,1.5,"这是我即将上线的第四个商品",["电子产品","硬件设备"]),
    new Product(5,"第五个商品",1.99,2.5,"这是我即将上线的第五个商品",["电子产品","硬件设备"]),
    new Product(6,"第六个商品",45.87,3.5,"这是我即将上线的第六个商品",["电子产品","硬件设备"])
  ];

  private comments:Comment[]=[
    new Comment(1,1,"2017-01-09 23:12:45","张三",3,"东西不错"),
    new Comment(2,1,"2017-01-09 23:12:45","李四",3,"东西不错"),
    new Comment(3,4,"2017-01-09 23:12:45","张三",3,"东西不错"),
    new Comment(4,4,"2017-01-09 23:12:45","张三",3,"东西不错")
  ]





  constructor( ) { }
  getProducts():Product[]{
    return this.products;
  }
  getProduct(id:number):Product {
       return this.products.find((product)=>product.id==id);

  }
  getCommentsForProductId(id:number):Comment[]{
    return this.comments.filter((comment:Comment)=>comment.productId==id);
  }


}
export class Product{
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories:Array<string>
  ){

  }
}
export class Comment {
  constructor(
   public id:number,
   public productId:number,
   public timestamp:string,
   public user:string,
   public rating:number,
   public content:string
  ){

  }
}

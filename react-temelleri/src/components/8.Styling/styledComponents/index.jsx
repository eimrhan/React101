import styled from "styled-components";

export const Deneme = styled.p `
    text-align: right;
    color: gainsboro;
`


// styled component ile belirli bir obje için component oluşturup onu stillendirebiliriz.
// dikkat edilmesi gereken husus; obje olarak tanımlıyorsun ve stillendirmeleri backtickler içinde yazıyorsun.

// obje olduğu için import ederken { } içinde import edip komponent olarak kullanıyorsun.

// import { Baslik } from ...
// <Baslik> Bu Bir Başlıktır </Baslik> 


// objelere prop da geçilebilir. detaylar için: //? https://styled-components.com
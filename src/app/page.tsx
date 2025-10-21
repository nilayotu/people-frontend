import { MDXRemote } from "next-mdx-remote/rsc";
import TextContent from "./text-content";
import components from "@/components/typography";

export default function () {
    return <TextContent
        enContent={<MDXRemote components={{ ...components }} source={`## English Version

### About the Application
This application manages a list of people by interacting with a backend API. It allows users to view existing people and create new ones according to specific rules.

**Steps:**

1. Go to **[https://fstar.dev/api/people](https://fstar.dev/api/people)** to view the existing people.  
2. List these people as cards on the application's **[/list](/list)** page. The cards should include the person's name, email address, and user image. If the person's rank is less than 5, the card should have a green border; otherwise, it should have a red border.  
3. Design a user creation form on the **[/create](/create)** page.  
4. **Rules:**  
   - The created user's **rank** value must be between **1 and 10**.  
   - A user can only create other users with a **lower rank than themselves** (higher numeric value = lower rank).  
   - When submitting the form, send a POST request to **[https://fstar.dev/api/people](https://fstar.dev/api/people)**. The request body should include the fields **name**, **email**, and **rank**. The header must include **x-user-id** to indicate which user ID is performing the action. x-user-id can be generated from the form or manually set in the code.  
   - When a request is sent to the backend, a "message" value is returned in the response. This message should appear below the form and be updated according to each form submission. If the action is successful, the text should be green; if it fails, it should be red.
`} />}

        trContent={<MDXRemote components={{ ...components }} source={`## Türkçe Versiyon

### Uygulama Hakkında
Bu uygulama, bir backend API ile etkileşime girerek bir kişi listesini yönetir. Kullanıcıların mevcut kişileri görüntülemesine ve belirli kurallara göre yeni kişiler oluşturmasına olanak tanır.

**Adımlar:**

1. Mevcut kişileri görüntülemek için **[https://fstar.dev/api/people](https://fstar.dev/api/people)** adresine gidin.  
2. Bu kişileri bu uygulamanın **[/list](/list)** sayfasında kartlar halinde listeleyin. Kartlar kişinin adını, e-posta adresini ve kullanıcı görselini içermelidir. Kişinin rütbesi (rank) 5'ten küçük ise kartta yeşil çerçeve, değilse kırmızı çerçeve olmalıdır.  
3. **[/create](/create)** sayfasında kullanıcı oluşturma formunu tasarlayın.
4. **Kurallar:**  
   - Oluşturulan kullanıcının **rütbe (rank)** değeri **1 ile 10** arasında olmalıdır.  
   - Kullanıcı yalnızca **kendi rütbesinden daha düşük** (daha yüksek değer = daha düşük rütbe) rütbeye sahip kullanıcılar oluşturabilir.
   - Form gönderiminde **[https://fstar.dev/api/people](https://fstar.dev/api/people)** adresine bir POST isteği göndermeli. İstek body'sinde **name**, **email**, **rank** alanları bulunmalıdır. Headerda ise **x-user-id** eklenerek listedeki hangi ID'li kullanıcı adına işlem yaptığı belirtilmelidir. x-user-id form üzerinden oluşturulabilir ya da kod kısmında manuel olarak girilebilir.
   - Backend adresine istek gönderildiğinde gelen yanıttan bir "message" değeri dönmektedir. Bu mesaj form kısmının altında bulunmalı ve her form gönderme yanıtına göre güncellenmelidir. Mesaj başarılıysa metin rengi yeşil, başarısızsa kırmızı olmalıdır.`} />}
    />
}
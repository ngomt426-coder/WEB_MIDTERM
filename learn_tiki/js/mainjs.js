function load_category_fromjson(dataset_path,bodycategory)
{
    var xhr = new XMLHttpRequest();
    xhr.open("GET", dataset_path, true);
    xhr.send();
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState == 4 && xhr.status == 200)
        {
            //handling when loading data successfully
            var jsonData = JSON.parse(xhr.responseText);
            
            if (jsonData == null || jsonData.categories == null)
            {
                alert("Lỗi: Không thể parse file JSON. Vui lòng kiểm tra cú pháp JSON.");
                return;
            }
            
            var categories = jsonData.categories;
            for (i = 0; i < categories.length; i++)
            {
                value_tag_image = categories[i].image;
                value_tag_name = categories[i].name;
                tr = document.createElement("tr");
                td_name = document.createElement("td");
                td_name.innerHTML = value_tag_name;
                td_image = document.createElement("td");
                td_image.innerHTML = "<img src='" + value_tag_image + "'/>";
                
                tr.appendChild(td_name);
                tr.appendChild(td_image);
                
                bodycategory.appendChild(tr);
            }
        }
        else
        {
            //handling when data can't be loaded
        }
    }
}
function load_category_fromxml(dataset_path,bodycategory)
{
    var xhr =new XMLHttpRequest();
    xhr.open("GET",dataset_path,true);
    xhr.send();
    xhr.onreadystatechange=function()
    {
        if (xhr.readyState==4 && xhr.status==200)
        {
            //handling when loading data successfully
            //khi vào đây tức là đã về local --> dùng DOM bài trước
            //var xmlDoc = parser.parseFromString(xhr.responseXML,"text/xml"); 
            var xmlDoc = xhr.responseXML;
            
            if (xmlDoc == null)
            {
                alert("Lỗi: Không thể parse file XML. Vui lòng kiểm tra cú pháp XML.");
                return;
            }
            tag_categories=xmlDoc.getElementsByTagName("category")
            for (i = 0; i < tag_categories.length; i++)
            {
                value_tag_image=tag_categories[i].getElementsByTagName("image")[0].childNodes[0].nodeValue
                value_tag_name=tag_categories[i].getElementsByTagName("name")[0].childNodes[0].nodeValue
                tr=document.createElement("tr")
                td_name=document.createElement("td")
                td_name.innerHTML=value_tag_name
                td_image=document.createElement("td")
                td_image.innerHTML="<img src='"+value_tag_image+"'/>"
               
                tr.appendChild(td_name)
                tr.appendChild(td_image)
               
                bodycategory.appendChild(tr)
            }
        }
        else
        {
            //handling when data can't be loaded
        }
    }

}
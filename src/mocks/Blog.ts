import {IPost, BlogTab} from "@/mocks/API"


export function getBlogIndex():[BlogTab[],IPost[]]{
    return[
        [
            {
                name:"همه",
                value:"all"
            },
            {
                name:"جدیدترین",
                value:"latest"
            },
            {
                name:"پربازدیدترین",
                value:"popular"
            },
            {
                name:"اخبار جی دامین",
                value:"news"
            }
        ],
        [
            {
                post:{
                    id: 1,
                    permalink: "",
                    title: "1 لورم ایپسوم یا طرح‌نما متنی ساختگی",
                    content:"",
                    description: "1 لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. ",
                    author: { id: 1, name: "1 کاربر تست" },
                    picture: "src/assets/pics/blog1.png",
                    date: 1673598370158,
                    postCategory:["latest","popular"],
                },
                comments:[],
                categories:[],
                relatedPosts:[]
            },
            {
                post:{
                    id: 2,
                    permalink: "",
                    title: "2 لورم ایپسوم یا طرح‌نما متنی ساختگی",
                    content:"",
                    description: "2 لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. ",
                    author: { id: 2, name: "2 کاربر تست" },
                    picture: "src/assets/pics/blog1.png",
                    date: 1673598370158,
                    postCategory:["latest","popular","news"], 
                },
                comments:[],
                categories:[],
                relatedPosts:[]
            },
            {
                post:{
                    id: 3,
                    permalink: "",
                    title: "3 لورم ایپسوم یا طرح‌نما متنی ساختگی",
                    description: "3 لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. ",
                    content:"",
                    author: { id: 3, name: "3 کاربر تست" },
                    picture: "src/assets/pics/blog1.png",
                    date: 1673598370158,
                    postCategory:["latest"], 
                },
                comments:[],
                categories:[],
                relatedPosts:[]
            },
            {
                post:{
                    id: 4,
                    permalink: "",
                    title: "4 لورم ایپسوم یا طرح‌نما متنی ساختگی",
                    description: "4 لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. ",
                    content:"",
                    author: { id: 4, name: "4 کاربر تست" },
                    picture: "src/assets/pics/blog1.png",
                    date: 1673598370158,
                    postCategory:["latest","news"], 
                },
                comments:[],
                categories:[],
                relatedPosts:[]
            },
            {
                post:{
                    id: 5,
                    permalink: "",
                    title: "5 لورم ایپسوم یا طرح‌نما متنی ساختگی",
                    description: "5 لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. ",
                    content:"",
                    author: { id: 5, name: "5 کاربر تست" },
                    picture: "src/assets/pics/blog1.png",
                    date: 1673598370158,
                    postCategory:["latest","popular","news"],
                },
                comments:[],
                categories:[],
                relatedPosts:[]
            },
            {
                post:{
                    id: 6,
                    permalink: "",
                    title: "6 لورم ایپسوم یا طرح‌نما متنی ساختگی",
                    description: "6 لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. ",
                    content:"",
                    author: { id: 6, name: "6 کاربر تست" },
                    picture: "src/assets/pics/blog1.png",
                    date: 1673598370158,
                    postCategory:["news","popular"], 
                }, 
                comments:[],
                categories:[],
                relatedPosts:[]
            },
            {
                post:{
                    id: 7,
                    permalink: "",
                    title: "7 لورم ایپسوم یا طرح‌نما متنی ساختگی",
                    description: "7 لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. ",
                    content:"",
                    author: { id: 7, name: "7 کاربر تست" },
                    picture: "src/assets/pics/blog1.png",
                    date: 1673598370158,
                    postCategory:["news","popular"],
                },
                comments:[],
                categories:[],
                relatedPosts:[]
            },
            {
                post:{
                    id: 8,
                    permalink: "",
                    title: "8 لورم ایپسوم یا طرح‌نما متنی ساختگی",
                    description: "8 لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. ",
                    content:"",
                    author: { id: 8, name: "8 کاربر تست" },
                    picture: "src/assets/pics/blog1.png",
                    date: 1673598370158,
                    postCategory:["news","latest"],
                },
                comments:[],
                categories:[],
                relatedPosts:[]
            },
            {
                post:{
                    id: 9,
                    permalink: "",
                    title: "9 لورم ایپسوم یا طرح‌نما متنی ساختگی",
                    description: "9 لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. ",
                    content:"",
                    author: { id: 9, name: "9 کاربر تست" },
                    picture: "src/assets/pics/blog1.png",
                    date: 1673598370158,
                    postCategory:["news","popular"], 
                },
                comments:[],
                categories:[],
                relatedPosts:[]
            },
            {
                post:{
                    id: 10,
                    permalink: "",
                    title: "10 لورم ایپسوم یا طرح‌نما متنی ساختگی",
                    description: "10 لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. ",
                    content:"",
                    author: { id: 10, name: "10 کاربر تست" },
                    picture: "src/assets/pics/blog1.png",
                    date: 1673598370158,
                    postCategory:["news","popular"], 
                },
                comments:[],
                categories:[],
                relatedPosts:[]
            }  
        ]
    ];
}
export function getPost(postId):IPost{
    return{
        post:{
            id: postId,
            permalink: "",
            title: postId+" لورم ایپسوم یا طرح‌نما متنی ساختگی ",
            description: postId+"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. ",
            content:`<p style="text-align:justify"><img alt="" src="https://www.jeyserver.com/packages/blog/storage/public/files/9ad347d6d4df34dbc5a7c59453d5a365.jpg" style="display:block; margin:0 auto" /></p>\r\n\r\n<p style="text-align:justify">&nbsp;</p>\r\n\r\n<p style="text-align:justify">rsync، یک ابزار خط فرمان سریع و همه کاره برای همگام&zwnj;سازی فایل&zwnj;ها و دایرکتوری&zwnj;ها بین دو سیستم از طریق shell ریموت یا از/به یک Rsync daemon ریموت است. این ابزار، انتقال بسیار سریع فایل را با انتقال تنها تفاوت&zwnj;ها بین مبدا و مقصد فراهم می&zwnj;کند.</p>\r\n\r\n<p style="text-align:justify">Rsync را می&zwnj;توان به منظور انعکاس داده&zwnj;ها، پشتیبان گیری افزایشی، کپی کردن فایل&zwnj;ها بین سیستم&zwnj;ها و به عنوان جایگزینی برای دستورات scp ،sftp و cp استفاده کرد.</p>\r\n\r\n<p style="text-align:justify">در این مقاله، نحوه استفاده از rsync به همراه نمونه&zwnj;های کاربردی و رایج&zwnj;ترین گزینه&zwnj;های آن شرح داده شده است.</p>\r\n\r\n<div style="page-break-after:always"><span style="display:none">&nbsp;</span></div>\r\n\r\n<p style="text-align:justify">&nbsp;</p>\r\n\r\n<h2 style="text-align:justify">نصب Rsync</h2>\r\n\r\n<p style="text-align:justify">ابزار rsync به صورت پیش فرض، روی اکثر توزیع&zwnj;های لینوکس و macOS نصب شده است. با این حال، اگر rsync را روی سیستم خود نصب ندارید، شما می&zwnj;توانید به راحتی آن را با استفاده از مدیر بسته توزیع خود نصب نمایید.</p>\r\n\r\n<p style="text-align:justify">&nbsp;</p>\r\n\r\n<p style="text-align:justify"><strong>نصب Rsync روی اوبونتو و دبیان</strong></p>\r\n\r\n<pre>\r\n<code class="language-bash">sudo apt install rsync</code></pre>\r\n\r\n<p style="text-align:justify">&nbsp;</p>\r\n\r\n<p style="text-align:justify"><strong>نصب Rsync روی CentOS و Fedora</strong></p>\r\n\r\n<pre>\r\n<code class="language-bash">sudo yum install rsync</code></pre>\r\n\r\n<p style="text-align:justify">&nbsp;</p>\r\n\r\n<h2 style="text-align:justify">ساختار دستور Rsync</h2>\r\n\r\n<p style="text-align:justify">قبل از اینکه به نحوه استفاده از دستور rsync بپردازیم، بیایید با بررسی ساختار اولیه دستور شروع کنیم.</p>\r\n\r\n<p style="text-align:justify">ساختار اولیه دستور rsync به شکل زیر است:</p>\r\n\r\n<pre>\r\n<code class="language-bash">Local to Local:  rsync [OPTION]... [SRC]... DEST\r\nLocal to Remote: rsync [OPTION]... [SRC]... [USER@]HOST:DEST\r\nRemote to Local: rsync [OPTION]... [USER@]HOST:SRC... [DEST]\r\n</code></pre>\r\n\r\n<p style="text-align:justify"><strong>OPTION:</strong> گزینه&zwnj;های rsync.</p>\r\n\r\n<p style="text-align:justify"><strong>SRC:</strong> دایرکتوری منبع.</p>\r\n\r\n<p style="text-align:justify"><strong>DEST:</strong> دایرکتوری مقصد.</p>\r\n\r\n<p style="text-align:justify"><strong>USER:</strong> نام کاربری ریموت.</p>\r\n\r\n<p style="text-align:justify"><strong>HOST:</strong> نام میزبان یا آدرس IP ریموت.</p>\r\n\r\n<p style="text-align:justify">&nbsp;</p>\r\n\r\n<p style="text-align:justify">rsync تعدادی گزینه را ارائه می&zwnj;دهد که نحوه رفتار دستور را کنترل می&zwnj;نماید. پرکاربردترین گزینه&zwnj;ها عبارتند از:</p>\r\n\r\n<p style="text-align:justify"><strong>a، --archive-:</strong> حالت آرشیو، معادل rlptgoD-. این گزینه به rsync می&zwnj;گوید که دایرکتوری&zwnj;ها را به صورت بازگشتی همگام&zwnj;سازی کند، دستگاه&zwnj;های خاص را انتقال دهد و مسدود نماید، لینک&zwnj;های symbolic، زمان&zwnj;های ویرایش، گروه&zwnj;ها، مالکیت و مجوزها را حفظ کند.</p>\r\n\r\n<p style="text-align:justify"><strong>z، --compress-:</strong> این گزینه، rsync را مجبور می&zwnj;کند تا داده&zwnj;ها را هنگام ارسال به دستگاه مقصد فشرده کند. تنها در صورتی از این گزینه استفاده نمایید که اتصال به دستگاه ریموت کند باشد.</p>\r\n\r\n<p style="text-align:justify"><strong>-P</strong>، معادل <strong>partial --progress--</strong>. هنگامی&zwnj;که از این گزینه استفاده می&zwnj;شود، rsync نوار پیشرفت را در حین انتقال نشان می&zwnj;دهد و فایل&zwnj;های نیمه منتقل شده را نگه می&zwnj;دارد. این گزینه، هنگام انتقال فایل&zwnj;های بزرگ از طریق اتصالات شبکه کند یا ناپایدار کاربردی است.</p>\r\n\r\n<p style="text-align:justify"><strong>delete--</strong>. هنگامی&zwnj;که از این گزینه استفاده می&zwnj;شود، rsync فایل&zwnj;های اضافی را از محل مقصد حذف می&zwnj;کند. این گزینه، هنگام نیاز به انعکاس داده (mirroring) کاربردی است.</p>\r\n\r\n<p style="text-align:justify"><strong>q، -- quiet-</strong>. اگر می&zwnj;خواهید پیام&zwnj;های غیر از خطا را حذف نمایید، از این گزینه استفاده کنید.</p>\r\n\r\n<p style="text-align:justify"><strong>e-</strong>. این گزینه، به شما امکان می&zwnj;دهد shell ریموت متفاوتی را انتخاب نمایید. به طور پیش فرض، rsync برای استفاده از ssh پیکربندی شده است.</p>\r\n\r\n<p style="text-align:justify">&nbsp;</p>\r\n\r\n<h2 style="text-align:justify">استفاده پایه&zwnj;ای Rsync</h2>\r\n\r\n<p style="text-align:justify">ابتدایی&zwnj;ترین موارد استفاده از rsync، کپی کردن یک فایل از یک مکان به مکان محلی دیگر است. به عنوان مثال:</p>\r\n\r\n<pre>\r\n<code class="language-bash">rsync -a /opt/filename.zip /tmp/</code></pre>\r\n\r\n<p style="text-align:justify"><img alt="" src="https://www.jeyserver.com/packages/blog/storage/public/files/c2f17e43c1bc95288d7ea41bce092a90.jpg" style="display:block; margin:0 auto" /></p>\r\n\r\n<p style="text-align:justify">&nbsp;</p>\r\n\r\n<p style="text-align:justify">کاربری که این دستور را اجرا می&zwnj;کند، باید مجوزهای خواندن در منبع و مجوزهای نوشتن در مقصد را داشته باشد.</p>\r\n\r\n<p style="text-align:justify">در صورتی که در این دستور، نام فایل را در بخش مسیر مقصد مشخص ننمایید، فایل با همان نام قبلی در مقصد قرار می&zwnj;گیرد. بنابراین، اگر می&zwnj;خواهید فایل را با نام دیگری در مقصد ذخیره کنید، آن نام را در قسمت مقصد مشخص نمایید:</p>\r\n\r\n<pre>\r\n<code class="language-bash">rsync -a /opt/filename.zip /tmp/newfilename.zip</code></pre>\r\n\r\n<p style="text-align:justify">قدرت واقعی rsync هنگام همگام سازی دایرکتوری&zwnj;ها قابل مشاهده است. مثال زیر، نحوه ایجاد یک نسخه پشتیبان محلی از فایل&zwnj;های وب سایت را نشان می&zwnj;دهد:</p>\r\n\r\n<pre>\r\n<code class="language-bash">rsync -a /var/www/domain.com/public_html/ /var/www/domain.com/public_html_backup/</code></pre>\r\n\r\n<p style="text-align:justify">اگر دایرکتوری مقصد وجود نداشته باشد، rsync آن را ایجاد می&zwnj;نماید.</p>\r\n\r\n<p style="text-align:justify">شایان ذکر است که rsync به همراه یک اسلش (/) در انتهای مبدا یا مقصد، رفتار متفاوتی با دایرکتوری&zwnj;های منبع ارائه می&zwnj;دهد. بدین معنی که اگر دایرکتوری مبدأ دارای یک اسلش انتهایی باشد، دستور تنها محتویات دایرکتوری را در دایرکتوری مقصد کپی می&zwnj;کند. هنگامی&zwnj;که اسلش انتهایی حذف می&zwnj;شود، rsync کل دایرکتوری منبع را در دایرکتوری مقصد کپی می&zwnj;کند.</p>\r\n\r\n<p style="text-align:justify">&nbsp;</p>\r\n\r\n<h2 style="text-align:justify">استفاده از rsync برای همگام سازی داده&zwnj;ها بین سیستم&zwnj;های ریموت</h2>\r\n\r\n<p style="text-align:justify">هنگام استفاده از rsync برای انتقال ریموت داده&zwnj;ها، باید ابزار rsync هم بر روی منبع و هم در دستگاه مقصد نصب شود. نسخه&zwnj;های جدید rsync برای استفاده از SSH به عنوان shell ریموت پیش فرض پیکربندی شده&zwnj;اند.</p>\r\n\r\n<p style="text-align:justify">در مثال زیر، یک دایرکتوری محلی به یک سیستم ریموت منتقل می&zwnj;شود:</p>\r\n\r\n<pre>\r\n<code class="language-bash">rsync -a /opt/media/ remote_user@remote_host_or_ip:/opt/media/</code></pre>\r\n\r\n<p style="text-align:justify">چنانچه ورود بدون رمز عبور SSH به دستگاه ریموت را تنظیم نکرده باشید، از شما خواسته می&zwnj;شود رمز عبور کاربر را وارد نمایید.</p>\r\n\r\n<p style="text-align:justify">با دستور زیر، برای انتقال داده از یک سیستم ریموت به یک سیستم محلی، از مکان ریموت به عنوان منبع استفاده کنید:</p>\r\n\r\n<pre>\r\n<code class="language-bash">rsync -a remote_user@remote_host_or_ip:/opt/media/ /opt/media/</code></pre>\r\n\r\n<p style="text-align:justify">اگر SSH در سیستم ریموت پورتی غیر از پورت پیش فرض 22 را شنود می&zwnj;کند، باید آن پورت را با استفاده از گزینه e- مشخص نمایید:</p>\r\n\r\n<pre>\r\n<code class="language-bash">rsync -a -e "ssh -p 2322" /opt/media/ remote_user@remote_host_or_ip:/opt/media/</code></pre>\r\n\r\n<p style="text-align:justify">هنگام انتقال یک فایل بسیار بزرگ، توصیه می&zwnj;شود دستور rsync را در یک نشست screen اجرا کنید یا از گزینه P- استفاده نمایید:</p>\r\n\r\n<pre>\r\n<code class="language-bash">rsync -a -P remote_user@remote_host_or_ip:/opt/media/ /opt/media/</code></pre>\r\n\r\n<p style="text-align:justify">&nbsp;</p>\r\n\r\n<h2 style="text-align:justify">حذف فایل&zwnj;ها و دایرکتوری&zwnj;ها</h2>\r\n\r\n<p style="text-align:justify">دو گزینه برای حذف فایل&zwnj;ها و دایرکتوری&zwnj;ها وجود دارد. اولین گزینه استفاده از آرگومان exclude-- و همراه آن مشخص کردن فایل&zwnj;ها و دایرکتوری&zwnj;های مورد نظر است.</p>\r\n\r\n<p style="text-align:justify">در این روش، هنگام حذف فایل&zwnj;ها یا دایرکتوری&zwnj;ها، باید از مسیرهای نسبی آن&zwnj;ها نسبت به مکان منبع استفاده کنید.</p>\r\n\r\n<p style="text-align:justify">در مثال زیر، نحوه حذف دایرکتوری&zwnj;های node_modules و tmp را نشان می&zwnj;دهد:</p>\r\n\r\n<pre>\r\n<code class="language-bash">rsync -a --exclude=node_modules --exclude=tmp /src_directory/ /dst_directory/</code></pre>\r\n\r\n<p style="text-align:justify">گزینه دوم این است که از گزینه exclude-from-- استفاده کرده و فایل&zwnj;ها و دایرکتوری&zwnj;های مورد نظر را در یک فایل مشخص نمایید.</p>\r\n\r\n<pre>\r\n<code class="language-bash">rsync -a --exclude-from='/exclude-file.txt' /src_directory/ /dst_directory/</code></pre>\r\n\r\n<pre>\r\n<code class="language-bash">                           /exclude-file.txt\r\nnode_modules\r\ntmp\r\n</code></pre>\r\n\r\n<p style="text-align:justify">&nbsp;</p>\r\n\r\n<p style="text-align:justify">&nbsp;</p>\r\n\r\n<p style="text-align:justify">&nbsp;</p>\r\n\r\n<p style="text-align:justify">منبع:</p>\r\n\r\n<p style="text-align:justify"><span style="color:#3498db">linuxize</span></p>\r\n`,
            author: { id: postId, name: postId+" کاربر تست "},
            picture: "http://localhost:3000/src/assets/pics/blog1.png",
            date: 1673598370158,
            postCategory:["news","popular"],
        },     
        comments:[
            {
                id:1,
                content:"لورم ایپسوم یا طرح‌نما متنی ساختگی",
                author:{id: 1, name:"کاربر تست",avatar:""},
                date:1673598370158,
            },
            {
                id:2,
                content:"لورم ایپسوم یا طرح‌نما متنی ساختگی",
                author:{id: 2, name:"کاربر تست",avatar:"http://localhost:3000/src/assets/pics/user.jpg"},
                date:1673598370158,
            },
            {
                id:3,
                content:"لورم ایپسوم یا طرح‌نما متنی ساختگی",
                author:{id: 3, name:"کاربر تست",avatar:""},
                date:1673598370158,
            }
        ],
        categories:[
            {
                id:1,
                parent:"",
                title:"رفع خطای به روز رسانی وردپرس در حال اجرا",
                permalink:""
            },
            {
                id:2,
                parent:"",
                title:"بروزرسانی هسته وردرپرس",
                permalink:""
            },
            {
                id:3,
                parent:"",
                title:"Causes of Update in Progress Error",
                permalink:""
            }
        ],
        relatedPosts:[
            {
                post:{
                    id: 8,
                    permalink: "",
                    title: "8 لورم ایپسوم یا طرح‌نما متنی ساختگی",
                    description: "8 لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. ",
                    content:"",
                    author: { id: 8, name: "8 کاربر تست" },
                    picture: "http://localhost:3000/src/assets/pics/blog1.png",
                    date: 1673598370158,
                    postCategory:["news","latest"],
                },
                comments:[],
                categories:[],
                relatedPosts:[]
            },
            {
                post:{
                    id: 9,
                    permalink: "",
                    title: "9 لورم ایپسوم یا طرح‌نما متنی ساختگی",
                    description: "9 لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. ",
                    content:"",
                    author: { id: 9, name: "9 کاربر تست" },
                    picture: "http://localhost:3000/src/assets/pics/blog1.png",
                    date: 1673598370158,
                    postCategory:["news","popular"], 
                },
                comments:[],
                categories:[],
                relatedPosts:[]
            },
            {
                post:{
                    id: 10,
                    permalink: "",
                    title: "10 لورم ایپسوم یا طرح‌نما متنی ساختگی",
                    description: "10 لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. ",
                    content:"",
                    author: { id: 10, name: "10 کاربر تست" },
                    picture: "http://localhost:3000/src/assets/pics/blog1.png",
                    date: 1673598370158,
                    postCategory:["news","popular"], 
                },
                comments:[],
                categories:[],
                relatedPosts:[]
            }  
        ]
    };
}
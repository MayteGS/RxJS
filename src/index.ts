import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';


const texto=document.createElement('div')

texto.innerHTML= `Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti velit debitis amet molestiae blanditiis distinctio saepe vitae maiores iste! Repellat ipsum voluptatum ad dolorum nobis sit at. Harum, totam nihil.
In laborum aliquam nostrum quidem neque ab temporibus officiis labore culpa. Molestias minus, eius fugit eaque soluta officia, nam cum quasi laborum dolorum temporibus voluptate optio eos omnis animi perferendis?
Quasi natus maiores cumque fugiat magni omnis quis veritatis pariatur itaque quae ex temporibus sint, animi ipsum qui dolorem ab reprehenderit, quisquam porro! Ab adipisci nostrum corrupti. Accusantium, commodi exercitationem.
Iure possimus quisquam veritatis, hic saepe ducimus omnis vero ipsam asperiores. Aspernatur, rem quae non sed ut dolorum in, dolore cupiditate cumque incidunt officiis sunt fugiat impedit eos iste velit!
Maiores atque dolor sed accusamus ratione voluptatum quasi? Deserunt expedita voluptatum maiores adipisci voluptatibus temporibus molestiae id, iste aspernatur, quis, iusto veritatis dolores quos sequi! Quidem eum similique expedita tempore?
Rerum, nesciunt quam dolore quia corporis libero labore illum odit excepturi, consequuntur reiciendis. Et, dolorem, illo eligendi corrupti impedit, dolore nihil ex officia sapiente deleniti tempora pariatur quaerat quidem ab!
Ipsam rem, qui quod maxime aut sapiente numquam iusto ipsa quia repudiandae sunt amet dolore enim autem est inventore perspiciatis quibusdam quasi debitis eveniet dicta distinctio laborum cupiditate. Non, ducimus.
Ipsa reiciendis facilis consectetur officiis quia magnam aut consequuntur aperiam distinctio omnis odio recusandae molestias odit, dignissimos repudiandae, fugiat aliquam nostrum error dolorum ex id veniam inventore, atque eaque! Distinctio?
Veniam eos quasi amet obcaecati autem architecto officia temporibus cumque eius, laudantium, assumenda beatae voluptatem? Quo sint incidunt nostrum blanditiis fuga sit itaque nemo magnam cum! Quasi culpa vel nulla?
Vel saepe facere minima voluptates quisquam recusandae, aspernatur placeat dolorem quaerat id fugiat nostrum corporis voluptate? Expedita, atque quaerat rerum blanditiis ad debitis sint! Assumenda itaque nemo ea incidunt iste!
Soluta doloremque vel distinctio repellendus ullam neque nihil odit tempora praesentium nostrum, necessitatibus debitis fuga? Aliquid, excepturi cum aut error similique autem unde. Atque, illo cumque veniam porro tenetur beatae?
Numquam eius quae accusamus, accusantium repellendus impedit quis ipsum inventore libero at magni possimus officia dolore. Exercitationem praesentium non reiciendis ullam maxime placeat consequatur, id obcaecati, perferendis sed quae sapiente.
Consequuntur esse facilis, facere rem modi alias quas dolorum dicta perferendis deleniti laudantium autem aspernatur nostrum saepe dolores cumque temporibus reprehenderit a quae sequi! Atque blanditiis cumque dignissimos in cupiditate!
Amet inventore deserunt odit beatae quas facere magnam a natus incidunt, corporis placeat? Nisi eaque possimus mollitia, facere tenetur dignissimos quia dolores, cumque rem adipisci itaque quidem, ratione aperiam dolorum.
Rerum aliquam sint ipsam. Quas suscipit nemo quaerat alias eum, ipsum architecto in provident tempore, harum officiis possimus iusto ratione asperiores tempora eius? Dolores molestiae iure amet sunt velit facere?
Nostrum corporis deserunt odio placeat perspiciatis assumenda doloribus accusamus! Voluptatum, possimus? Quod, repellat facere. Aut ullam perferendis dolor magni facere repellat rem, temporibus atque tempore, expedita cupiditate! Corporis, cum quos?
Dignissimos voluptates ad cumque, praesentium recusandae quos quod perspiciatis in eum, animi id accusamus molestias repellat illum quisquam. Reprehenderit commodi provident quaerat unde aspernatur ad facere deserunt dolor quam? Dolores.
Et perspiciatis molestiae minus expedita eligendi! Numquam, necessitatibus magni voluptatem labore assumenda earum rem modi maxime autem, fuga quisquam ad quidem quod, inventore pariatur consequatur alias reprehenderit optio quis repellat.
Aut ducimus repudiandae rem magni minima repellat dolorem voluptatum perspiciatis cupiditate itaque consequuntur sequi, ratione odio aliquid nobis expedita, voluptate ea iusto ipsa magnam earum corrupti animi porro. Impedit, ex?
Quas aut, illum voluptate nihil saepe rem eveniet tenetur dignissimos nobis libero doloremque accusantium asperiores cupiditate iste dolorum beatae error a eaque officiis atque. Explicabo dicta beatae nulla culpa commodi?
Cupiditate, mollitia! Velit aperiam doloribus eius, natus atque soluta neque perferendis ab. Natus exercitationem deserunt consequuntur placeat molestiae veniam animi dignissimos dolores modi! Fugit illum tenetur corrupti ad, reiciendis pariatur?
Alias natus, dolores illum eligendi explicabo dolorem eum. Animi dicta sint sapiente temporibus pariatur, recusandae natus commodi fuga earum, dignissimos fugiat quisquam ipsa deleniti iusto eaque expedita saepe tenetur nulla?
Quidem commodi, impedit ab provident cum consequatur, ipsa quasi molestiae aperiam doloremque praesentium beatae! Facere corporis ex voluptates, amet eaque modi laudantium minima voluptate dignissimos cumque explicabo quod nemo. Architecto.
A enim quasi est, id eaque hic magnam. Dolorem vero assumenda incidunt praesentium unde reiciendis expedita neque repudiandae maxime optio quo enim sint ipsa tempore eligendi, at blanditiis explicabo. Molestias!
Et, enim quia. Iste laudantium fuga voluptatibus ea fugit sunt quisquam nobis harum voluptatum maiores placeat saepe enim, magni et ullam quae, aperiam facilis ut explicabo! Reiciendis nam soluta quis?
Eos est fugit quam dolorum dolorem eius dolore totam saepe nulla tempore, sed dignissimos exercitationem atque repellat fugiat incidunt, eum sequi? Placeat esse laboriosam rem, corrupti repellendus molestiae quae culpa!
Corrupti molestias natus molestiae optio. Consequuntur necessitatibus illum porro dolores eos, exercitationem asperiores aspernatur dignissimos accusantium quaerat dolor a! Corrupti ex unde nesciunt aperiam quas impedit quos saepe velit aliquam.
Fuga rem quo vitae reiciendis totam dolor dignissimos, adipisci rerum quae unde exercitationem facere voluptate praesentium iusto, sunt debitis. Atque suscipit expedita sunt, magnam tempora voluptates! Fugit sunt cupiditate minima!
Modi ut ducimus odit nemo consectetur accusamus aspernatur impedit delectus ullam dolor cupiditate rerum sint nisi maxime, unde molestias? Illo quisquam aliquam quas obcaecati assumenda soluta cupiditate deleniti similique voluptas!
Sed possimus quos iusto illo, dicta autem accusamus deserunt totam quod provident tempora ipsum ipsam voluptate? Aperiam et, rem dignissimos amet consequatur recusandae sequi, cum atque, a placeat quas nisi.
Fugiat laudantium veritatis inventore. Repellendus eveniet veritatis aperiam voluptate quos reprehenderit ullam nisi suscipit labore autem dolorum aut ex, sint, placeat inventore, molestias excepturi aspernatur quibusdam! Quasi sed deleniti possimus?
Aperiam laborum ducimus cupiditate nesciunt sint, ad quidem earum et eos. Porro tenetur itaque quibusdam quas natus, dicta, id harum adipisci ad, modi optio repudiandae iste explicabo placeat quis eligendi.
Quaerat magnam quasi vel sapiente? Blanditiis a magni, eaque veniam inventore officia odio temporibus vero, modi quibusdam dolorem impedit ut provident quod reiciendis, ad voluptas nemo pariatur odit. Laborum, voluptas.
A delectus voluptatum reiciendis, ipsa suscipit adipisci! Voluptatem tempora sapiente rerum sed! Ratione nemo neque facere vitae, aspernatur libero, optio animi quos assumenda itaque amet iste, enim eius suscipit incidunt.
Explicabo eligendi, impedit odit veniam vitae a amet rerum ea modi cupiditate sapiente accusamus temporibus rem, dolore eos inventore? Iusto aperiam dolores consequuntur similique laborum quod laudantium repudiandae natus tenetur.
Deserunt temporibus obcaecati at tenetur reprehenderit repellendus quae architecto, corporis explicabo saepe facere sed, sint esse tempora qui, quod id ea! Praesentium, inventore ipsam. Voluptate ad soluta atque repellat delectus.
Explicabo optio ea, minus maiores quidem consequatur fuga consequuntur officiis quo excepturi eum rerum atque culpa error laudantium, aspernatur id adipisci? Iusto aliquam a, excepturi consequatur dignissimos illo facilis autem.
Placeat vero doloribus laboriosam sed neque quam, porro sapiente, aut repellendus quibusdam quo dolorem eaque recusandae at repellat quia tempora cupiditate perferendis odio in deserunt itaque. Tempora impedit voluptatem minus?
Eum dolorem quibusdam dicta temporibus ipsum optio officiis ipsa mollitia praesentium, officia corrupti excepturi, accusantium obcaecati. Minima explicabo recusandae itaque vero, asperiores aut, sequi voluptatibus ea saepe facilis provident aliquid?
Dolores maxime doloremque facere optio quidem non tempore eveniet dignissimos corporis? Nesciunt, eveniet? Maiores provident eum doloribus corrupti repellat dicta et quibusdam iusto iure aliquam consectetur, eligendi possimus neque a!
Id ut corporis maxime voluptatum, est magnam exercitationem nam sed et excepturi harum, quidem veniam in autem, omnis numquam quae veritatis! Tempore fugit nesciunt adipisci neque sed molestiae soluta autem.
Sit officia eius repellendus recusandae incidunt itaque veritatis delectus animi iusto vitae ut quia odio sapiente commodi aut cumque laborum perspiciatis obcaecati, rem voluptate et culpa. Ad nulla in fugit?
Nesciunt, quidem repellendus quam corporis, cum libero voluptatem amet omnis quo accusantium veritatis eos nobis nam ab vel nisi! Debitis tempore optio dolor voluptatum architecto cumque illum necessitatibus neque cupiditate.
Illo fugiat unde neque sit asperiores vel eligendi numquam culpa perspiciatis nostrum deleniti dolor cumque placeat, sint, qui rem, est ab et ea quo repudiandae non. Nemo nulla at voluptatum!
A, minima odit! Iusto accusantium impedit porro. Illo, autem laboriosam. Provident sint eos autem sapiente qui, itaque, modi vero officia quam mollitia, eligendi tempore dolorum ut et nobis? Mollitia, iusto.
Maxime iusto quos, doloribus quaerat ducimus itaque voluptates odit et. Sequi molestiae dignissimos laudantium deleniti ratione. Repellat minima cupiditate reiciendis non ipsum exercitationem quos alias, corrupti facere a maxime ea?
Fugiat sed, sit incidunt sapiente delectus reprehenderit repudiandae est minima ratione. Nostrum labore aspernatur excepturi explicabo ex. Rem eveniet, libero, optio dolorum voluptatibus, qui atque sequi obcaecati sapiente laboriosam enim.
Sed at commodi, ab ad fugiat est maxime dolore, voluptas provident aut nisi nobis delectus voluptatem corporis amet, eum quas? Praesentium laboriosam velit blanditiis dolor inventore tempora in modi iure.
Dicta, suscipit quisquam laboriosam voluptatem quae sit aspernatur vel quod ipsam voluptatum possimus, eligendi magni obcaecati voluptatibus id accusantium. Accusamus deleniti qui distinctio eius molestiae obcaecati architecto incidunt id praesentium.
Quibusdam magnam labore a numquam vero ratione quod sint dignissimos? Laborum minus eos odio, autem, exercitationem veritatis explicabo ut a eveniet distinctio libero ipsam? Sequi possimus laborum eligendi soluta numquam.`

const body = document.querySelector('body')
body?.append(texto)
const progressbar = document.createElement('div')
progressbar.setAttribute('class','progress-bar')

body?.append(progressbar)

const calcularPorcentajeScroll=(event:any)=>{
    const{
        scrollTop,
        scrollHeight,
        clientHeight
    }=event.target.documentElement

    return (scrollTop / (scrollHeight - clientHeight))* 100
}
const scroll$ = fromEvent(document,'scroll')

const progress$ = scroll$.pipe(
    map((event)=> calcularPorcentajeScroll(event)),
    tap(console.log)
)

progress$.subscribe(porcentaje=>{
    progressbar.style.width=`${porcentaje}%`
})
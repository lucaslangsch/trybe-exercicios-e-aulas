* ```docker <comando> <subcomando> <parâmetros>``` é o formato padrão para comandos não-abreviados no CLI;
* Utilize o parâmetro ```--help``` no ```<comando>``` ou ```<subcomando>``` para ter a relação completa do que pode ser executado a partir deles;
  * Exemplo: ```docker container --help``` ou ```docker container run --help```.
  * Os ```<parâmetros>``` são opcionais na execução dos comandos;
* ```docker images``` para visualizar todas as imagens Docker que já estão presentes em sua máquina.
* ```docker container ls``` para listar os containers em execução na máquina;
  * ```docker container ls -a``` para listar todos os containers, incluindo os que foram parados ou terminaram a execução;
* ```docker container run <flags>? <imagem>:<tag> <argumentos>?``` para executar um container utilizando a imagem identificada pelo ```<imagem>:<tag>```
  * Os parâmetros ```<flags>?``` e ```<argumentos>?``` são opcionais, identificados pelo sinal ```?```
  * ```--name meu-container``` atribui o nome ```meu-container``` ao container criado
  * ```--rm```atribui a função auto-remove, que ao encerrar a execução o container será exluído
  * ```-d``` ou ```--detach``` faz com que a execução do container ocorra em segundo plano, o container executará de forma assíncrona
* ```docker rm <nome-do-container>``` para remover o container de nome ```<nome-do-container>```. Obs: a imagem permanece
* ```docker stop <nome-do-container>``` solicita a parada, que ocorrerá após executar o essencial.
  * a flag ```-t 0``` força a parada no mesmo instante
* ```docker exec -it <nome-do-container> <comando-a-ser-executado>``` executa comandos dentro do container <nome-do-container>
 * a flag ```sh``` executa uma simulação de terminal
* uma vez dentro do terminal do container ```ps aux``` para listar os processos internos e ```exit``` para sair do terminal do container
* ```docker logs <flags> <nome-do-container>``` exibe os logs de container <nome-do-container> mesmo se este já foi encerrado
* ```docker top``` traz as informações sobre os processos que estão sendo rodados dentro do container, o que não inclui serviços que são compartilhados com o sistema hospedeiro.
* ```docker container prune``` limpa todos os containers inativos

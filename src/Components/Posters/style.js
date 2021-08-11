import styled from 'styled-components';

export const ContainerPost = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 width: 100%;
 max-width: 600px;
 margin: 0 auto;
 border-radius: 10px;
 box-shadow: 0 5px 10px 10px rgba(0, 0, 0, 0.3);
 
 .New-post{
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 height: 170px;
 width: 100%;
 padding-top: 12px;
 padding-left: 16px;
 padding-right: 16px;
 padding-bottom: 10px;
 background-color: white;
 border-radius: 15px;
}
.cabecalho-newPost{
 display: flex;
 align-items: center;
 width: 100%;
 padding: 0 20px;
}
.cabecalho-newPost img{
 height: 40px;
 width: 40px;
 border-radius: 50%;
 margin-right: 10px;
}
.cabecalho-newPost .textNew{
 text-align: left;
 cursor: pointer;
 width: 100%;
 height: 40px;
 padding: 8px 12px;
 border-radius: 20px;
 border: 0.4px solid gray;
 outline: none;
 font-size: 1.2rem;
 opacity: 0.8;
}
.textNew:hover{
 background: rgba(0, 0, 0, 0.5);
}
#separator{
 display: flex;
 content: "";
 height: 1px;
 width: 100%;
 color: black;
 background-color: black;
 margin: 20px auto;
 opacity: 1;
}
.options-newPoster{
 display: flex;
 width: 100%;
 justify-content: space-around;
}
.options-newPoster button{
 height: 50px;
 width: 100%;
 cursor: pointer;
 border: none;
 background: transparent;
 font-size: 18px;
 border-radius: 8px;
}
.options-newPoster i{
 margin-right: 5px;
 font-size: 20px;
}
.options-newPoster button:hover{
 background-color: rgba(0, 0, 0, 0.4);
}
#btn-video-life{
 color: black;
 flex: 1.5;
}
#btn-video-foto{
 color: black;
 flex: 1;
}
#btn-sent-action{
 color: black;
 flex: 2;
}
 
`;
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { UsuariosProvider } from '../providers/usuarios/usuarios';
import { HttpClientModule } from '@angular/common/http';
import { ListaUsuarioPage } from '../pages/lista-usuario/lista-usuario';
import { MensagensProvider } from '../providers/mensagens/mensagens';
import { CadastroMensagensPage } from '../pages/cadastro-mensagens/cadastro-mensagens';
import { ListaMensagensPage } from '../pages/lista-mensagens/lista-mensagens';
import { CadastroMensagens2Page } from '../pages/cadastro-mensagens2/cadastro-mensagens2';
import { ListaMensagens2Page } from '../pages/lista-mensagens2/lista-mensagens2';
import { NoticiaProvider } from '../providers/noticia/noticia';
import { CadastroNoticiaPage } from '../pages/cadastro-noticia/cadastro-noticia';
import { LoginPage } from '../pages/login/login';
import { LoginProvider } from '../providers/login/login';
import { AngularFireModule } from '@angular/fire';
import { FIREBASE_CONFIG } from '../app/app.firebase.config';
import { UploadProvider } from '../providers/upload';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { LocaisProvider } from '../providers/locais/locais';
import { CadastroLocalPage } from '../pages/cadastro-local/cadastro-local';
import { ListaLocalPage } from '../pages/lista-local/lista-local';
import { VisitanteProvider } from '../providers/visitante/visitante';
import { CadastroVisitantePage } from '../pages/cadastro-visitante/cadastro-visitante';
import { ListaVisitantePageModule } from '../pages/lista-visitante/lista-visitante.module';
import { ListaVisitantePage } from '../pages/lista-visitante/lista-visitante';
<<<<<<< HEAD
import { CategoriasProvider } from '../providers/categorias/categorias';
import { CadastroCategoriaPage } from '../pages/cadastro-categoria/cadastro-categoria';
import { CadastroCategoriaPageModule } from '../pages/cadastro-categoria/cadastro-categoria.module';
=======
import { CargosProvider } from '../providers/cargos/cargos';
import { ListaCargoPage } from '../pages/lista-cargo/lista-cargo';
import { CadastroCargoPage } from '../pages/cadastro-cargo/cadastro-cargo';
>>>>>>> 26d182abf14ed4b7bb26dbf4fdc58d647f3161a5

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CadastroPage,
    ListaUsuarioPage,
    ListaMensagensPage,
    CadastroMensagensPage,
    ListaMensagens2Page,
    CadastroMensagens2Page,
    ListPage,
    CadastroNoticiaPage,
    LoginPage,
    ListaLocalPage,
    CadastroLocalPage,
    CadastroVisitantePage,
    ListaVisitantePage,
<<<<<<< HEAD
    CadastroCategoriaPage,
=======
    ListaCargoPage,
    CadastroCargoPage,
>>>>>>> 26d182abf14ed4b7bb26dbf4fdc58d647f3161a5
  ],
  imports: [ 

    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireStorageModule,
    HttpClientModule, 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CadastroPage,
    ListaUsuarioPage,
    ListaMensagensPage,
    CadastroMensagensPage,
    ListaMensagens2Page,
    CadastroMensagens2Page,
    ListPage,
    CadastroNoticiaPage,
    LoginPage,
    ListaLocalPage,
    CadastroLocalPage,
    CadastroVisitantePage,
    ListaVisitantePage,
<<<<<<< HEAD
    CadastroCategoriaPage,
=======
    ListaCargoPage,
    CadastroCargoPage,
    
>>>>>>> 26d182abf14ed4b7bb26dbf4fdc58d647f3161a5
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuariosProvider,
    MensagensProvider,
    NoticiaProvider,
    LoginProvider,
    UploadProvider,
    LocaisProvider,
    VisitanteProvider,
<<<<<<< HEAD
    CategoriasProvider,
  
=======
    CargosProvider,
    
>>>>>>> 26d182abf14ed4b7bb26dbf4fdc58d647f3161a5
  ]
})
export class AppModule {}

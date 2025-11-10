import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Aviso de Privacidad',
  description: 'Aviso de privacidad y protección de datos personales de Payaya en cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 sticky top-0 bg-background/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </Button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 py-12 max-w-5xl">
        <div className="max-w-none">
          <h1 className="text-3xl font-bold mb-2 text-foreground">Aviso de Privacidad</h1>
          <p className="text-xs text-muted-foreground mb-8">Última actualización: Noviembre 2025</p>

          <div className="space-y-6 text-xs leading-relaxed">
            {/* Identificación */}
            <section>
              <h2 className="text-base font-semibold mb-3 text-foreground">1. Identificación y Domicilio del Responsable</h2>
              <p className="text-muted-foreground mb-2">
                Payaya, en adelante "el Responsable", con domicilio en Ciudad de México, México, es responsable del uso y protección de sus datos personales.
              </p>
              <p className="text-muted-foreground">
                El presente Aviso de Privacidad se emite en cumplimiento a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (en adelante "la Ley"), publicada en el Diario Oficial de la Federación el 5 de julio de 2010, su Reglamento publicado el 21 de diciembre de 2011, y los Lineamientos del Aviso de Privacidad publicados el 17 de enero de 2013, así como demás normatividad aplicable en la materia.
              </p>
            </section>

            {/* Datos recopilados */}
            <section>
              <h2 className="text-base font-semibold mb-3 text-foreground">2. Datos Personales que Recabamos</h2>
              <p className="text-muted-foreground mb-3">
                Para las finalidades señaladas en el presente Aviso de Privacidad, el Responsable podrá recabar los siguientes datos personales:
              </p>

              <h3 className="text-sm font-semibold mb-2 text-foreground">Datos de Identificación y Contacto:</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-3 ml-4">
                <li>Nombre completo</li>
                <li>Correo electrónico personal y/o corporativo</li>
                <li>Número telefónico fijo y/o móvil</li>
                <li>Dominio y URL del sitio web de la empresa</li>
              </ul>

              <h3 className="text-sm font-semibold mb-2 text-foreground">Datos Laborales:</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-3 ml-4">
                <li>Nombre de la empresa u organización</li>
                <li>Puesto o cargo</li>
                <li>Área o departamento</li>
                <li>Giro empresarial</li>
              </ul>

              <h3 className="text-sm font-semibold mb-2 text-foreground">Datos de Navegación y Uso:</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-3 ml-4">
                <li>Dirección IP</li>
                <li>Tipo de navegador y dispositivo</li>
                <li>Sistema operativo</li>
                <li>Páginas visitadas y tiempo de navegación</li>
                <li>Fecha y hora de acceso</li>
                <li>URL de referencia</li>
                <li>Cookies y tecnologías de rastreo</li>
              </ul>

              <h3 className="text-sm font-semibold mb-2 text-foreground">Datos de Interacción con la Plataforma:</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>Preferencias de usuario</li>
                <li>Configuraciones personalizadas</li>
                <li>Historial de uso de la plataforma</li>
                <li>Interacciones con contenido educativo</li>
              </ul>
            </section>

            {/* Datos sensibles */}
            <section>
              <h2 className="text-base font-semibold mb-3 text-foreground">3. Datos Personales Sensibles</h2>
              <p className="text-muted-foreground">
                Le informamos que para cumplir con las finalidades previstas en este Aviso de Privacidad, no se recaban ni tratan datos personales sensibles, entendiendo por estos aquellos que afecten a la esfera más íntima de su titular, o cuya utilización indebida pueda dar origen a discriminación o conlleve un riesgo grave para éste. En caso de que en el futuro sea necesario recabar y tratar datos personales sensibles, se le solicitará su consentimiento expreso por escrito.
              </p>
            </section>

            {/* Finalidades */}
            <section>
              <h2 className="text-base font-semibold mb-3 text-foreground">4. Finalidades del Tratamiento de Datos Personales</h2>

              <h3 className="text-sm font-semibold mb-2 text-foreground">4.1 Finalidades Primarias (Necesarias para la Relación Jurídica):</h3>
              <p className="text-muted-foreground mb-2">
                Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades que son necesarias para el servicio que solicita:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-3 ml-4">
                <li>Identificarlo y contactarlo para dar seguimiento a su solicitud de información, demostración o contratación de servicios</li>
                <li>Proporcionar los servicios de la plataforma LMS (Learning Management System)</li>
                <li>Gestionar y administrar su cuenta de usuario y la de su organización</li>
                <li>Procesar y dar seguimiento a las solicitudes de servicio, soporte técnico y atención al cliente</li>
                <li>Enviar comunicaciones relacionadas con el servicio contratado</li>
                <li>Facturación y cobranza de los servicios prestados</li>
                <li>Cumplir con las obligaciones contraídas con usted</li>
                <li>Evaluar la calidad del servicio que le brindamos</li>
                <li>Mantener actualizados nuestros registros y bases de datos</li>
                <li>Cumplir con obligaciones legales y requerimientos de autoridades competentes</li>
                <li>Ejercer los derechos del Responsable derivados de la relación jurídica entre las partes</li>
              </ul>

              <h3 className="text-sm font-semibold mb-2 text-foreground">4.2 Finalidades Secundarias (Opcionales):</h3>
              <p className="text-muted-foreground mb-2">
                De manera adicional, utilizaremos su información personal para las siguientes finalidades secundarias que no son necesarias para el servicio solicitado, pero que nos permiten y facilitan brindarle una mejor atención:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-3 ml-4">
                <li>Enviarle boletines informativos, newsletters y contenido educativo sobre temas de capacitación corporativa</li>
                <li>Realizar encuestas de satisfacción y estudios de mercado</li>
                <li>Elaborar análisis estadísticos y de tendencias de uso de la plataforma</li>
                <li>Realizar mejoras y desarrollos en nuestros servicios</li>
                <li>Enviarle publicidad, promociones y ofertas especiales sobre nuestros productos y servicios</li>
                <li>Invitarle a eventos, webinars, conferencias y actividades relacionadas con nuestros servicios</li>
                <li>Crear perfiles de usuario para personalizar la experiencia en la plataforma</li>
                <li>Fines de mercadotecnia, publicidad y prospección comercial</li>
              </ul>
              <p className="text-muted-foreground italic">
                En caso de que no desee que sus datos personales sean tratados para las finalidades secundarias, desde este momento usted nos puede comunicar lo anterior, enviando un correo electrónico indicando su nombre completo y manifestando su negativa para el tratamiento de sus datos personales para dichas finalidades. La negativa para el uso de sus datos personales para estas finalidades no podrá ser un motivo para que le neguemos los servicios que solicita o contrata con nosotros.
              </p>
            </section>

            {/* Transferencia */}
            <section>
              <h2 className="text-base font-semibold mb-3 text-foreground">5. Transferencias de Datos Personales</h2>
              <p className="text-muted-foreground mb-3">
                Le informamos que sus datos personales pueden ser transferidos y tratados dentro y fuera del país, por personas distintas a este Responsable. En ese sentido, su información puede ser compartida con:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-3 ml-4">
                <li>Proveedores de servicios de tecnología y hosting que nos ayudan a operar la plataforma</li>
                <li>Proveedores de servicios de analítica web y seguimiento de navegación (Microsoft Clarity, Umami Analytics, Plausible Analytics)</li>
                <li>Instituciones financieras para el procesamiento de pagos</li>
                <li>Autoridades competentes cuando sea requerido por ley</li>
                <li>Terceros en caso de fusión, adquisición o venta de activos de la empresa</li>
              </ul>
              <p className="text-muted-foreground mb-3">
                Todas las transferencias se realizarán conforme a lo dispuesto por la Ley y su Reglamento. En caso de que la transferencia requiera de su consentimiento, el mismo le será solicitado en su momento. Para las transferencias señaladas, nos comprometemos a que los terceros receptores de datos personales asuman las mismas obligaciones y medidas de seguridad que el Responsable ha implementado.
              </p>
              <p className="text-muted-foreground">
                Si usted no manifiesta su oposición para que sus datos personales sean transferidos, se entenderá que ha otorgado su consentimiento para ello.
              </p>
            </section>

            {/* Derechos ARCO */}
            <section>
              <h2 className="text-base font-semibold mb-3 text-foreground">6. Derechos de Acceso, Rectificación, Cancelación y Oposición (ARCO)</h2>
              <p className="text-muted-foreground mb-3">
                Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada adecuadamente (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición). Estos derechos se conocen como derechos ARCO.
              </p>
              <p className="text-muted-foreground mb-3">
                Para el ejercicio de cualquiera de los derechos ARCO, usted deberá presentar la solicitud respectiva a través de correo electrónico. La solicitud deberá contener:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-3 ml-4">
                <li>El nombre del titular y domicilio u otro medio para comunicarle la respuesta a su solicitud</li>
                <li>Los documentos que acrediten la identidad o, en su caso, la representación legal del titular</li>
                <li>La descripción clara y precisa de los datos personales respecto de los que se busca ejercer alguno de los derechos ARCO</li>
                <li>Cualquier otro elemento o documento que facilite la localización de los datos personales</li>
              </ul>
              <p className="text-muted-foreground mb-3">
                El Responsable comunicará al titular, en un plazo máximo de 20 (veinte) días hábiles, contados desde la fecha en que se recibió la solicitud de acceso, rectificación, cancelación u oposición, la determinación adoptada, a efecto de que, si resulta procedente, se haga efectiva la misma dentro de los 15 (quince) días hábiles siguientes a la fecha en que se comunica la respuesta.
              </p>
              <p className="text-muted-foreground">
                Los plazos antes referidos podrán ser ampliados una sola vez por un periodo igual, siempre y cuando así lo justifiquen las circunstancias del caso.
              </p>
            </section>

            {/* Revocación */}
            <section>
              <h2 className="text-base font-semibold mb-3 text-foreground">7. Revocación del Consentimiento</h2>
              <p className="text-muted-foreground mb-3">
                En todo momento, usted puede revocar el consentimiento que nos ha otorgado para el tratamiento de sus datos personales, a fin de que dejemos de hacer uso de los mismos. Para ello, es necesario que presente su solicitud siguiendo el mismo procedimiento establecido para el ejercicio de los derechos ARCO.
              </p>
              <p className="text-muted-foreground">
                Es importante que tenga en cuenta que no en todos los casos podremos atender su solicitud o concluir el uso de forma inmediata, ya que es posible que por alguna obligación legal requiramos seguir tratando sus datos personales. Asimismo, usted deberá considerar que para ciertos fines, la revocación de su consentimiento implicará que no le podamos seguir prestando el servicio que nos solicitó, o la conclusión de su relación con nosotros.
              </p>
            </section>

            {/* Limitación */}
            <section>
              <h2 className="text-base font-semibold mb-3 text-foreground">8. Limitación de Uso y Divulgación de Datos</h2>
              <p className="text-muted-foreground">
                Con objeto de que usted pueda limitar el uso y divulgación de su información personal, le ofrecemos los siguientes medios: manifestarlo por escrito a través de correo electrónico, en el cual deberá indicar claramente su nombre completo y los datos cuya divulgación desea limitar. Su solicitud será procesada conforme al procedimiento establecido para los derechos ARCO.
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-base font-semibold mb-3 text-foreground">9. Uso de Cookies, Web Beacons y Tecnologías Similares</h2>
              <p className="text-muted-foreground mb-3">
                Le informamos que en nuestra página web utilizamos cookies, web beacons y otras tecnologías de rastreo, a través de las cuales es posible monitorear su comportamiento como usuario de internet, así como brindarle un mejor servicio y experiencia al navegar en nuestra página.
              </p>
              <p className="text-muted-foreground mb-3">
                Los datos personales que obtenemos de estas tecnologías de rastreo son los siguientes:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-3 ml-4">
                <li>Identificadores, nombre de usuario y contraseñas de sesión</li>
                <li>Idioma preferido por el usuario</li>
                <li>Región en la que se encuentra el usuario</li>
                <li>Tipo de navegador del usuario</li>
                <li>Tipo de sistema operativo del usuario</li>
                <li>Fecha y hora del inicio y final de una sesión de un usuario</li>
                <li>Páginas web visitadas por un usuario</li>
                <li>Búsquedas realizadas por un usuario</li>
                <li>Publicidad revisada por un usuario</li>
                <li>Listas y hábitos de consumo en páginas de compras</li>
              </ul>
              <p className="text-muted-foreground mb-3">
                Estas tecnologías podrán deshabilitarse siguiendo los procedimientos del navegador de internet que utiliza. Sin embargo, le informamos que en caso de deshabilitarlas, es posible que el sitio web no funcione adecuadamente.
              </p>

              <h3 className="text-sm font-semibold mb-2 text-foreground">Tipos de Cookies que Utilizamos:</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-3 ml-4">
                <li><strong>Cookies Estrictamente Necesarias:</strong> Son esenciales para que pueda navegar por el sitio web y utilizar sus funciones</li>
                <li><strong>Cookies de Rendimiento:</strong> Recopilan información sobre cómo utiliza nuestro sitio web (páginas que visita, si experimenta errores)</li>
                <li><strong>Cookies de Funcionalidad:</strong> Permiten que el sitio web recuerde las elecciones que hace (como su idioma o región)</li>
                <li><strong>Cookies de Publicidad:</strong> Se utilizan para ofrecer anuncios más relevantes para usted y sus intereses</li>
              </ul>

              <h3 className="text-sm font-semibold mb-2 text-foreground">Herramientas de Analítica Utilizadas:</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li><strong>Microsoft Clarity:</strong> Para grabaciones de sesiones y mapas de calor</li>
                <li><strong>Umami Analytics:</strong> Para análisis de tráfico web</li>
                <li><strong>Plausible Analytics:</strong> Para métricas de uso del sitio</li>
              </ul>
            </section>

            {/* Seguridad */}
            <section>
              <h2 className="text-base font-semibold mb-3 text-foreground">10. Medidas de Seguridad</h2>
              <p className="text-muted-foreground mb-3">
                El Responsable ha implementado y mantiene las medidas de seguridad administrativas, técnicas y físicas necesarias y suficientes para proteger sus datos personales contra daño, pérdida, alteración, destrucción o el uso, acceso o tratamiento no autorizado.
              </p>
              <p className="text-muted-foreground mb-3">
                Entre las medidas de seguridad implementadas se encuentran:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-3 ml-4">
                <li>Uso de protocolos de cifrado SSL/TLS para la transmisión de datos</li>
                <li>Almacenamiento seguro en servidores con medidas de protección física y lógica</li>
                <li>Controles de acceso basados en roles y privilegios mínimos necesarios</li>
                <li>Auditorías de seguridad periódicas</li>
                <li>Políticas de contraseñas robustas</li>
                <li>Capacitación continua del personal en materia de protección de datos</li>
                <li>Acuerdos de confidencialidad con empleados y proveedores</li>
              </ul>
              <p className="text-muted-foreground">
                Le informamos que sus datos personales serán resguardados bajo estrictas medidas de seguridad administrativas, técnicas y físicas, las cuales han sido implementadas con el objeto de proteger sus datos personales contra daño, pérdida, alteración, destrucción o el uso, acceso o tratamiento no autorizados.
              </p>
            </section>

            {/* Menores */}
            <section>
              <h2 className="text-base font-semibold mb-3 text-foreground">11. Protección de Datos de Menores de Edad</h2>
              <p className="text-muted-foreground mb-3">
                Nuestros servicios están dirigidos a empresas y organizaciones para fines de capacitación corporativa. No recopilamos intencionalmente datos personales de menores de 18 años sin el consentimiento de sus padres, tutores o representantes legales.
              </p>
              <p className="text-muted-foreground">
                En caso de que un menor de edad proporcione información personal a través de nuestro sitio web o plataforma sin el consentimiento de sus padres o tutores, solicitamos que se nos contacte inmediatamente para proceder con la eliminación de dicha información de nuestras bases de datos.
              </p>
            </section>

            {/* Cambios */}
            <section>
              <h2 className="text-base font-semibold mb-3 text-foreground">12. Modificaciones al Aviso de Privacidad</h2>
              <p className="text-muted-foreground mb-3">
                El presente Aviso de Privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales; de nuestras propias necesidades por los productos o servicios que ofrecemos; de nuestras prácticas de privacidad; de cambios en nuestro modelo de negocio, o por otras causas.
              </p>
              <p className="text-muted-foreground mb-3">
                Nos comprometemos a mantenerlo informado sobre los cambios que pueda sufrir el presente Aviso de Privacidad, a través de nuestro sitio web en la sección de Aviso de Privacidad.
              </p>
              <p className="text-muted-foreground">
                El procedimiento a través del cual se llevarán a cabo las notificaciones sobre cambios o actualizaciones al presente Aviso de Privacidad es el siguiente: se publicará la versión actualizada en nuestro sitio web, indicando la fecha de última actualización. Le recomendamos revisar periódicamente este aviso para mantenerse informado sobre cómo protegemos su información personal.
              </p>
            </section>

            {/* Consentimiento */}
            <section>
              <h2 className="text-base font-semibold mb-3 text-foreground">13. Consentimiento para el Tratamiento de Datos</h2>
              <p className="text-muted-foreground mb-3">
                Al proporcionar sus datos personales a través de nuestro sitio web, formularios de contacto, correo electrónico, o al utilizar nuestros servicios, usted consiente de manera expresa el tratamiento de sus datos personales conforme a los términos y condiciones del presente Aviso de Privacidad.
              </p>
              <p className="text-muted-foreground">
                En caso de que no esté de acuerdo con los términos establecidos en este Aviso de Privacidad, le solicitamos que se abstenga de proporcionar sus datos personales a través de los medios antes mencionados.
              </p>
            </section>

            {/* Autoridad */}
            <section>
              <h2 className="text-base font-semibold mb-3 text-foreground">14. Autoridad de Protección de Datos</h2>
              <p className="text-muted-foreground mb-3">
                Si usted considera que su derecho a la protección de datos personales ha sido lesionado por alguna conducta u omisión de nuestra parte, o presume alguna violación a las disposiciones previstas en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, su Reglamento y demás ordenamientos aplicables, podrá interponer su inconformidad o denuncia ante el Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI).
              </p>
              <p className="text-muted-foreground">
                Para mayor información, le sugerimos visitar su página oficial de internet www.inai.org.mx o bien ponerse en contacto directo con ellos en sus oficinas.
              </p>
            </section>

            {/* Vigencia */}
            <section>
              <h2 className="text-base font-semibold mb-3 text-foreground">15. Fecha de Vigencia</h2>
              <p className="text-muted-foreground">
                El presente Aviso de Privacidad fue actualizado por última vez en noviembre de 2025 y tiene vigencia a partir de su publicación en el sitio web de Payaya.
              </p>
            </section>

            {/* Aceptación */}
            <section className="bg-muted/20 p-4 rounded-lg border border-border/30">
              <h2 className="text-base font-semibold mb-3 text-foreground">16. Aceptación de los Términos</h2>
              <p className="text-muted-foreground mb-2">
                Este Aviso de Privacidad complementa cualquier otro acuerdo, contrato o política que haya sido celebrado entre usted y el Responsable.
              </p>
              <p className="text-muted-foreground">
                El uso de nuestro sitio web y servicios implica la aceptación de este Aviso de Privacidad y de los términos y condiciones aplicables.
              </p>
            </section>
          </div>
        </div>

        {/* Back button */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <Link href="/">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </Button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 mt-12">
        <div className="container mx-auto px-6 py-8">
          <p className="text-center text-xs text-muted-foreground">
            © 2025 Payaya. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

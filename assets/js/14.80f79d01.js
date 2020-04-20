(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{422:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"message-audit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#message-audit"}},[t._v("#")]),t._v(" Message Audit")]),t._v(" "),a("p",[t._v("Due to asynchronous nature of messaging, it is not always easy to find out the message flow.\nStep-into end-to-end debugging is almost impossible to use, especially if message processing\nis done in parallel and consumers perform atomic operations.")]),t._v(" "),a("p",[t._v("To enable better diagnostic and troubleshooting, the audit log, which contains all messages\nthat have been sent and consumed, would provide a great help.")]),t._v(" "),a("p",[t._v("Also, certain systems require keeping the full log of operations, and if all operations are\ndone using messages, storing these messages will satisfy such requirement.")]),t._v(" "),a("p",[t._v("MassTransit supports message audit by using special observers.")]),t._v(" "),a("h2",{attrs:{id:"principles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#principles"}},[t._v("#")]),t._v(" Principles")]),t._v(" "),a("p",[t._v("Two main parts need to be saved for each message to provide complete audit:")]),t._v(" "),a("ul",[a("li",[t._v("The message itself")]),t._v(" "),a("li",[t._v("Metadata")])]),t._v(" "),a("p",[t._v("Message metadata includes:")]),t._v(" "),a("ul",[a("li",[t._v("Message id")]),t._v(" "),a("li",[t._v("Message type")]),t._v(" "),a("li",[t._v("Context type (Send, Publish or Consume)")]),t._v(" "),a("li",[t._v("Conversation id")]),t._v(" "),a("li",[t._v("Correlation id")]),t._v(" "),a("li",[t._v("Initiator id")]),t._v(" "),a("li",[t._v("Request id (for request/response)")]),t._v(" "),a("li",[t._v("Source address")]),t._v(" "),a("li",[t._v("Destination address")]),t._v(" "),a("li",[t._v("Response address (for request/response)")]),t._v(" "),a("li",[t._v("Fault address")])]),t._v(" "),a("p",[t._v("The audit feature is generic and requires an implementation for the "),a("code",[t._v("IMessageAuditStore")]),t._v(" interface.\nThis interface is very simple and has one method only:")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[t._v("Task "),a("span",{pre:!0,attrs:{class:"token generic-method"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("StoreMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("T"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MessageAuditMetadata")]),t._v(" metadata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Some audit store implementations are included out of the box and described below.")]),t._v(" "),a("p",[t._v("There are three observers that connect to the message pipeline and record them.\nTwo are for messages being sent - send and publish observers; one is for messages that\nare being consumed.")]),t._v(" "),a("p",[t._v("Consume observer is invoked before a message is consumed, so the message is stored to the audit\nstore even if a consumer fails. Send and publish observers are invoked after the message\nhas actually been sent.")]),t._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),a("p",[t._v("There are two extensions methods for "),a("code",[t._v("IBusControl")]),t._v(" that enable sent and consumed messages audit.\nConfiguring both looks like this:")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" busControl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ConfigureBus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// all usual configuration")]),t._v("\nbusControl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ConnectSendAuditObservers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("auditStore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbusControl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ConnectConsumeAuditObserver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("auditStore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("There, the "),a("code",[t._v("auditStore")]),t._v(" is the audit persistent store. Currently available stores include:")]),t._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:"/advanced/ef.html"}},[t._v("Entity Framework")])],1)]),t._v(" "),a("p",[t._v("Please remember that observers need to be configured before the bus starts.")]),t._v(" "),a("h2",{attrs:{id:"filters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#filters"}},[t._v("#")]),t._v(" Filters")]),t._v(" "),a("p",[t._v("Sometimes there are messages in the system that are technical. These could be some monitoring and\nhealthcheck messages, which are being sent often and could pollute the audit log. Another example\ncould be the "),a("code",[t._v("Fault<T>")]),t._v(" events.")]),t._v(" "),a("p",[t._v("In order not to save these messages to the audit store, you can filter them out. You can configure\nthe observers to use message filters like this:")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[t._v("busControl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ConnectSendAuditObservers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("auditStore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token generic-method"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Ignore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HealthCheck")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbusControl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ConnectConsumeAuditObserver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("auditStore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Ignore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ServicePoll"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("RubbishEvent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"metadata-factory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#metadata-factory"}},[t._v("#")]),t._v(" Metadata factory")]),t._v(" "),a("p",[t._v("By default, the audit logging feature uses its own, quite complete, metadata collection mechanism.\nHowever, you can implement your own metadata factories to collect more data or different data.")]),t._v(" "),a("p",[t._v("There are two types of metadata factories:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("DefaultConsumeMetadataFactory")]),t._v(" that gets the "),a("code",[t._v("ConsumeObserver")])]),t._v(" "),a("li",[a("code",[t._v("DefaultSendMetadataFactory")]),t._v(" that gets the "),a("code",[t._v("SendObserver")]),t._v(" (which is used for both send and publish)")])]),t._v(" "),a("p",[t._v("Factories are simple classes that implement "),a("code",[t._v("IConsumeMetadataFactory")]),t._v(" or "),a("code",[t._v("ISendMetadataFactory")]),t._v("\ninterfaces and return a new "),a("code",[t._v("MessageAuditMetadata")]),t._v(" object from a given context.\nFor example, the default consume audit metadata factory implementation looks like this:")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MessageAuditMetadata")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ContextType "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" contextType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ConversationId "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ConversationId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    CorrelationId "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CorrelationId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    InitiatorId "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("InitiatorId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    MessageId "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MessageId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    RequestId "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RequestId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    DestinationAddress "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DestinationAddress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("?.")]),t._v("AbsoluteUri"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    SourceAddress "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SourceAddress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("?.")]),t._v("AbsoluteUri"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    FaultAddress "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FaultAddress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("?.")]),t._v("AbsoluteUri"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ResponseAddress "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ResponseAddress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("?.")]),t._v("AbsoluteUri"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Headers "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Headers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("?.")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("?.")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ToDictionary")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("k "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" v "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" v"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ToString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("To use your own factory, you can use the third parameter when configuring the observers:")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[t._v("busControl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ConnectSendAuditObservers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("auditStore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" filter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MySendContextMetadataFactory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbusControl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ConnectConsumeAuditObserver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("auditStore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" filter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MySendContextMetadataFactory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);
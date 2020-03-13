import ApplicationSerializer from './application';

export default class MarcaSerializer extends ApplicationSerializer {
  normalizeFindRecordResponse(store, type, payload) {
    return {
      data: {
        id: payload.laboratorio_id,
        type: type.modelName,
        attributes: {
          nome: payload.nome,
          descricao: payload.descricao,
          laboratorio_id: payload.laboratorio_id,
          version_id: payload.version_id,
          deleted: payload.deleted,
          created_at: payload.created_at
        }
      }
    }
  }
}

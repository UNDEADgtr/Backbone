package nl.jnc.backbone;

import org.apache.log4j.Logger;
import org.jboss.resteasy.annotations.providers.jaxb.Formatted;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import java.util.Map;

@Path("/")
public class CompanyResource {

    private static Logger logger = Logger.getLogger(CompanyResource.class);
    private static int newId = 4;
    private JSONObject jsonObject;

    public CompanyResource() {
        jsonObject = new JSONObject();

        JSONObject object = new JSONObject();
        object.put("id", 1);
        object.put("title", "Помыть посуду");
        object.put("description", "Всю");
        object.put("when", "Сейчас");
        jsonObject.put(1, object);
        object = new JSONObject();
        object.put("id", 2);
        object.put("title", "Сходить в магазин");
        object.put("description", "Евроопт");
        object.put("when", "Вечером");
        jsonObject.put(2, object);
        object = new JSONObject();
        object.put("id", 3);
        object.put("title", "Сделать домашку");
        object.put("description", "По английскому");
        object.put("when", "Завтра");
        jsonObject.put(3, object);


    }

    @GET
    @Formatted
    @Produces(MediaType.APPLICATION_JSON)
    public JSONArray readAll() throws Exception {
        String msg = String.format("Get short info about companies");
        try {
            JSONArray list = new JSONArray();
            for (Object entry : jsonObject.entrySet()) {
                Map.Entry<String, Object> e = (Map.Entry<String, Object>) entry;
                list.add(e.getValue());
            }
            return list;
        } catch (Exception e) {
            logger.error(msg, e);
            throw new Exception(e);
        }
    }

    @GET
    @Formatted
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public JSONObject read(@PathParam("id") String id) throws Exception {
        String msg = String.format("Get Company configuration for companyId=%s", id);
        try {
            return (JSONObject) jsonObject.get(id);
        } catch (Exception e) {
            logger.error(msg, e);
            throw new Exception(e);
        }
    }

    @PUT
    @Formatted
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public JSONObject update(@PathParam("id") String id, JSONObject object) throws Exception {
        String msg = String.format("Get Company configuration for companyId=%s", id);
        try {
            return (JSONObject) jsonObject.get(id);
        } catch (Exception e) {
            logger.error(msg, e);
            throw new Exception(e);
        }
    }

    @POST
    @Formatted
    @Produces(MediaType.APPLICATION_JSON)
    public JSONObject create(JSONObject object) throws Exception {
        String msg = String.format("Get Company configuration for companyId=%s", object.toJSONString());
        try {

            object.put("id", newId);
            jsonObject.put(newId, object);
            newId++;
            return object;
        } catch (Exception e) {
            logger.error(msg, e);
            throw new Exception(e);
        }
    }

    @DELETE
    @Formatted
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public JSONObject delete(@PathParam("id") String id) throws Exception {
        String msg = String.format("Get Company configuration for companyId=%s", id);
        try {
            jsonObject.remove(id);
            return null;
        } catch (Exception e) {
            logger.error(msg, e);
            throw new Exception(e);
        }
    }

    @GET
    @Formatted
    @Path("/ftpOut")
    @Produces(MediaType.APPLICATION_JSON)
    public JSONObject readFtpOut(@QueryParam("companyGln") String companyGln) throws Exception {
        String msg = String.format(
                "Get FtpOut configuration for companyGln=%s", companyGln);
        try {
            return null;
        } catch (Exception e) {
            logger.error(msg, e);
            throw new Exception(e);
        }
    }


}
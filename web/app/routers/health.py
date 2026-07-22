from fastapi import APIRouter, HTTPException
from app.services.supabase_client import supabase

router = APIRouter()

@router.get("/ping-db")
def ping_db():
    try:
        # swap "your_table_name" for any real table you know has rows
        response = supabase.table("guesses").select("*").limit(1).execute()
        return {"status": "ok", "sample_row": response.data}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
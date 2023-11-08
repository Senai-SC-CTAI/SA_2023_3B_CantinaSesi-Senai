package com.sa.moka.repository;
import com.sa.moka.model.Comida;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface ComidaRepository extends JpaRepository<Comida, Long> {
}
